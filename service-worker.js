const CACHE_VERSION = 'v3';
const CACHE_PREFIX = 'ddgame-offline-';
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;
const OFFLINE_ASSETS = ['./', './index.html', './manifest.webmanifest'];

let assetsToCache = [];

function toAbsoluteUrl(path) {
  return new URL(path, self.location).toString();
}

function getPrecachedAssets() {
  const precached = new Set(OFFLINE_ASSETS.map(toAbsoluteUrl));

  try {
    importScripts('./service-worker-assets.js');
  } catch (error) {
    console.warn('DDGame service worker: unable to load assets manifest.', error);
  }

  const manifestAssets = self.assetsManifest?.assets ?? [];
  for (const asset of manifestAssets) {
    if (!asset || typeof asset.url !== 'string') {
      continue;
    }

    const absoluteUrl = toAbsoluteUrl(asset.url);
    if (absoluteUrl.includes('service-worker')) {
      continue;
    }

    precached.add(absoluteUrl);
  }

  return Array.from(precached);
}

assetsToCache = getPrecachedAssets();

async function cacheAssets(cache) {
  for (const assetUrl of assetsToCache) {
    try {
      await cache.add(assetUrl);
    } catch (error) {
      console.warn(`DDGame service worker: failed to cache ${assetUrl}`, error);
    }
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cacheAssets(cache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        const fallback = await cache.match(toAbsoluteUrl('./index.html'));
        return fallback ?? Response.error();
      })
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) {
        return cached;
      }

      try {
        const response = await fetch(event.request);
        if (response && response.ok) {
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        const fallback = await cache.match(toAbsoluteUrl('./index.html'));
        if (fallback) {
          return fallback;
        }
        throw error;
      }
    })
  );
});
