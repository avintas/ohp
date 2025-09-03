// Service Worker for OHP - Cache Management
const CACHE_NAME = 'ohp-v2';
const STATIC_CACHE = 'ohp-static-v2';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_FILES))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - handle requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // For HTML pages, always try network first, then cache
        if (request.headers.get('accept')?.includes('text/html')) {
          // Add cache-busting parameter to force fresh content
          const url = new URL(request.url);
          url.searchParams.set('_cb', Date.now().toString());
          
          return fetch(url.toString())
            .then((networkResponse) => {
              // If network succeeds, update cache and return response
              if (networkResponse.ok) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(request, responseClone));
              }
              return networkResponse;
            })
            .catch(() => {
              // If network fails, return cached version
              return cachedResponse;
            });
        }

        // For other resources, return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // If not cached, fetch from network
        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse.ok) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(request, responseClone));
            }
            return networkResponse;
          });
      })
  );
});
