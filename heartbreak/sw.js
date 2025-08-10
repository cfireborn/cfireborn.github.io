const CACHE_VERSION = 'hb-cache-v1-2025-08-10';
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './imageRandomizer.js',
  './manifest.webmanifest',
  './assets/lessons.txt',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_VERSION ? caches.delete(key) : Promise.resolve()))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        // Avoid caching non-GET or opaque responses
        if (req.method === 'GET' && res && res.status === 200 && res.type === 'basic') {
          const resClone = res.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, resClone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});