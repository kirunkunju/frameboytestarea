// FrameBoy Service Worker
// Minimal SW to enable PWA installation and file_handlers support

const CACHE_NAME = 'frameboy-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Pass through all fetch requests — no offline caching needed
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
