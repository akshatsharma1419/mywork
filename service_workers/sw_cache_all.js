// Phase
// Register Install Activate

const cacheName = "v1";

self.addEventListener("install", (e) => {});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// We put in catch because it will return error in offline mode
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Make copy of res
        const resCopy = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resCopy);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
