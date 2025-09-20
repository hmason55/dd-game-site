const subscribers = new Set();
let deferredPrompt = null;
let initialized = false;

function notifySubscribers(available) {
  for (const subscriber of subscribers) {
    try {
      subscriber.invokeMethodAsync('OnInstallAvailabilityChanged', available);
    } catch (error) {
      console.error('Failed to notify install availability subscriber', error);
    }
  }
}

function resolveServiceWorkerUrl() {
  const baseElement = document.querySelector('base');
  const baseHref = baseElement?.getAttribute('href') ?? '/';
  const origin = window.location.origin;
  try {
    const absolute = new URL(baseHref, origin);
    return new URL('service-worker.js', absolute).toString();
  } catch (error) {
    console.warn('Unable to resolve service worker URL, defaulting to relative path.', error);
    return 'service-worker.js';
  }
}

export function initializePwaSupport() {
  if (initialized) {
    return;
  }

  initialized = true;

  if ('serviceWorker' in navigator) {
    const swUrl = resolveServiceWorkerUrl();
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(swUrl).catch((error) => {
        console.error('Failed to register service worker', error);
      });
    });
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    notifySubscribers(true);
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notifySubscribers(false);
  });

  notifySubscribers(deferredPrompt !== null);
}

export function subscribeInstallAvailability(dotNetReference) {
  subscribers.add(dotNetReference);
  try {
    dotNetReference.invokeMethodAsync('OnInstallAvailabilityChanged', deferredPrompt !== null);
  } catch (error) {
    console.error('Failed to notify new install availability subscriber', error);
  }
}

export function unsubscribeInstallAvailability(dotNetReference) {
  subscribers.delete(dotNetReference);
}

export async function promptInstall() {
  if (!deferredPrompt) {
    return false;
  }

  deferredPrompt.prompt();
  const result = await deferredPrompt.userChoice;
  deferredPrompt = null;
  notifySubscribers(false);
  return result.outcome === 'accepted';
}

export function canInstall() {
  return deferredPrompt !== null;
}
