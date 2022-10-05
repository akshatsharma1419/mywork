const cacheName = "v1";
const cacheAssets = ["main.js", "index.html", "style.css"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

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
  e.respondWith(fetch(e.request).catch(caches.match(e.request)));
});
