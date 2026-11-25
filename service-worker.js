// JobTrack Community — Service Worker
// Strategy:
//   - App shell: network-first with cache fallback (works offline after the first visit)
//   - Firebase SDK modules on gstatic.com/firebasejs: cache-first (versioned URLs, so the cache is safe)
//   - Firebase / Google API traffic (Firestore, Auth): never intercepted — Firestore has its own offline cache

const CACHE_NAME = 'jobtrack-community-v6';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './fonts/assistant-hebrew-400-normal.woff2',
  './fonts/assistant-hebrew-600-normal.woff2',
  './fonts/assistant-hebrew-700-normal.woff2',
  './fonts/assistant-latin-400-normal.woff2',
  './fonts/assistant-latin-600-normal.woff2',
  './fonts/assistant-latin-700-normal.woff2',
  './fonts/alef-hebrew-700-normal.woff2',
  './fonts/alef-latin-700-normal.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // one missing file must not break the whole install
      .then(cache => Promise.all(SHELL.map(u => cache.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // Versioned Firebase SDK modules: cache-first so sign-in/sync can start offline
  if (url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/')) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }))
    );
    return;
  }

  // Everything else on Google/Firebase hosts is left to the browser (auth handlers, Firestore, etc.)
  if (url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('google.com') ||
      url.hostname.includes('firebase.com') ||
      url.hostname.includes('firebaseapp.com') ||
      url.hostname.includes('gstatic.com')) {
    return;
  }

  if (url.origin === self.location.origin) {
    // never cache the Firebase Auth redirect handler
    if (url.pathname.startsWith('/__/')) return;
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match('./index.html')))
    );
  }
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
