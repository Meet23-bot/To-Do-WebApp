// sw.js — Service Worker for My Tasks PWA
const CACHE_NAME = 'my-tasks-v1';

// Files to cache for offline use
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  // Cache the Google Fonts stylesheets and their font files
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap'
];

// ── Install: cache all assets ────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local assets strictly; Google Fonts may fail in some environments
      return cache.addAll(['./', './index.html', './manifest.json',
                           './icons/icon-192.png', './icons/icon-512.png'])
        .then(() => {
          // Try to cache fonts but don't fail install if blocked
          return cache.add('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap')
            .catch(() => {});
        });
    })
  );
  // Activate immediately without waiting for old SW to be removed
  self.skipWaiting();
});

// ── Activate: clean up old caches ───────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: cache-first strategy ──────────────────────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and store it
      return fetch(event.request)
        .then(response => {
          // Only cache valid responses
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          const toCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
          return response;
        })
        .catch(() => {
          // Network failed and not cached — return offline fallback for navigation
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});