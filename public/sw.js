const PRECACHE = [
  '/'
];

self.importScripts('worker.js');

/**
 * Using sw-offline-google-analytics
 */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');
workbox.googleAnalytics.initialize();

/**
 * When PWA is installed, get files from manifest and cache them.
 */
self.addEventListener('install', (event) => {
  // Cache files generated by the manifest.
  event.waitUntil(
    self.readManifest()
      .then((data) => self.cacheManifest(data)));
});

/**
 * When application is activated, update cache.
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      // Open cache for the specific version.
      // This allows us to remove old cache when there
      // are larger structural changes.
      .open(CACHE_VERSION)
      // Start pre-caching files.
      .then((cache) => cache.addAll(PRECACHE))
  );
});

/**
 * Override fetch to support offline mode.
 */
self.addEventListener('fetch', (event) => {
  if (
    event.request.cache === 'only-if-cached' &&
    event.request.mode !== 'same-origin'
  ) {
    // Handles a very specific case.
    // https://stackoverflow.com/questions/48463483/what-causes-a-failed-to-execute-fetch-on-serviceworkerglobalscope-only-if
    return;
  }

  if (event.request.method === 'GET') {
    if (!navigator.onLine) {
      event.respondWith(self.fetchOffline(event.request));
    } else {
      event.respondWith(self.fetchOnline(event));
    }
  } else {
    // For non GET requests, do as before.
    event.respondWith(fetch(event.request));
  }
});
