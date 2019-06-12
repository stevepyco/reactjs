
const CACHE_VERSION = 'v1';
const ASSET_MANIFEST = './asset-manifest.json';

/**
 * Reads manifests generated by webpack.
 */
self.readManifest = () => {
  return fetch(ASSET_MANIFEST)
    .then(response => response.json());
}

/**
 * This will cache the data read by `readManifest`.
 */
self.cacheManifest = (data) => {
  caches.open(CACHE_VERSION).then(cache => {
    Object.entries(data).forEach(([key, value]) => {
      fetch(value).then(response => {
        cache.put(value, response);
      })
    })
  });
};

/**
 * Returns cached data for the corresponding request.
 */
self.getFromCache = (request) => {
  return caches.open(CACHE_VERSION)
    .then((cache) => cache.match(request));
}

/**
 * Fetches data from cache and returns result.
 */
self.fetchOffline = (request) => {
  return getFromCache(request.clone())
    .then((response) => response)
    .catch((error) => console.error('Fetch From Cache:', error));
}

/**
 * This will fetch data from the web.
 * If it fails, it will fetch from the cache instead.
 */
self.fetchOnline = (event) => {
  let fetchRequest = event.request.clone();

  return fetch(fetchRequest)
    .then((response) => {
      // Cache response.
      cacheRequest(event, response.clone());
      return response;
    }).catch((error) => {
      // Fetch offline.
      return fetchOffline(event.request);
    });
}

/**
 * Caches the request.
 * NOTE: It always caches against a specific version.
 */
self.cacheRequest = (event, response) => {
  caches.open(CACHE_VERSION)
    .then((cache) => {
      cache.put(event.request, response.clone());
    });
}
