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

  if (!self.assetsManifest) {
    try {
      importScripts('./service-worker-assets.js');
    } catch (error) {
      console.warn('DDGame service worker: unable to load assets manifest.', error);
    }
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

  if (isRangeRequest(event.request)) {
    event.respondWith(handleRangeRequest(event));
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
        if (response && response.ok && response.status === 200) {
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

function isRangeRequest(request) {
  return request.headers.has('range');
}

async function handleRangeRequest(event) {
  const rangeHeader = event.request.headers.get('range');
  const cache = await caches.open(CACHE_NAME);
  const normalizedRequest = createNormalizedRequest(event.request);

  event.waitUntil(ensureFullAssetCached(cache, normalizedRequest));

  try {
    const networkResponse = await fetch(event.request);
    if (networkResponse && networkResponse.ok) {
      return networkResponse;
    }
    throw new Error('Network response was not ok');
  } catch (error) {
    const cachedResponse = await cache.match(normalizedRequest);
    if (!cachedResponse) {
      throw error;
    }

    try {
      return await createPartialResponse(cachedResponse, rangeHeader);
    } catch (rangeError) {
      console.warn('DDGame service worker: failed to fulfill range request from cache.', rangeError);
      throw error;
    }
  }
}

async function ensureFullAssetCached(cache, request) {
  const cached = await cache.match(request);
  if (cached) {
    return;
  }

  try {
    const fullResponse = await fetch(request, { cache: 'no-cache' });
    if (fullResponse && fullResponse.ok && fullResponse.status === 200) {
      await cache.put(request, fullResponse.clone());
    }
  } catch (error) {
    console.warn('DDGame service worker: unable to cache full asset for range request.', error);
  }
}

function createNormalizedRequest(request) {
  const headers = new Headers();
  request.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'range') {
      return;
    }
    headers.set(key, value);
  });

  return new Request(request.url, {
    method: 'GET',
    headers,
    credentials: request.credentials,
    mode: request.mode,
    redirect: request.redirect,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    integrity: request.integrity,
    cache: 'default',
  });
}

async function createPartialResponse(fullResponse, rangeHeader) {
  if (!rangeHeader) {
    return fullResponse;
  }

  const size = Number(fullResponse.headers.get('Content-Length')) || undefined;
  const buffer = await fullResponse.arrayBuffer();
  const totalLength = size ?? buffer.byteLength;

  const matches = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
  if (!matches) {
    return fullResponse;
  }

  let start = matches[1] ? parseInt(matches[1], 10) : undefined;
  let end = matches[2] ? parseInt(matches[2], 10) : undefined;

  if (start === undefined && end === undefined) {
    return fullResponse;
  }

  if (start === undefined) {
    const suffixLength = end ?? 0;
    start = Math.max(totalLength - suffixLength, 0);
    end = totalLength - 1;
  } else {
    if (end === undefined || isNaN(end) || end >= totalLength) {
      end = totalLength - 1;
    }
  }

  if (start < 0 || start > end || start >= totalLength) {
    return new Response(null, {
      status: 416,
      headers: {
        'Content-Range': `bytes */${totalLength}`,
      },
    });
  }

  const sliced = buffer.slice(start, end + 1);
  const headers = new Headers(fullResponse.headers);
  headers.set('Content-Length', String(sliced.byteLength));
  headers.set('Content-Range', `bytes ${start}-${end}/${totalLength}`);
  headers.set('Accept-Ranges', 'bytes');
  headers.delete('Content-Encoding');

  return new Response(sliced, {
    status: 206,
    statusText: 'Partial Content',
    headers,
  });
}
