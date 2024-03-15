// service-worker.js

// Cache name
const CACHE_NAME = 'HOMMA';

// List of files to cache
const cacheUrls = [
  '/',
  '/index.html',
  '/ngsw-worker.js',  // Angular Service Worker
    '/main.61117b1f62302f10.js',
    '/polyfills.cf419aa12150fa3f.js',
    '/runtime.b10264c200497b12.js',
    '/styles.a62bd4b4a27cfcda.css',
    '/common.3c3ae3a9f9138c73.js',
  '/favicon.ico',
  '/assets/fonts/custom-font.woff2',
  '/assets/images/logo.png',
  '/assets/data/data.json',
  'https://api.quickbase.com/v1/records',
  'https://api.quickbase.com/v1/records/query',
  'assets/logo/HOM.png',

  // Add more files and resources to cache
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(cacheUrls))
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
