const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'styles/main.css',
  'images/space1.jpg',
  'images/space2.jpg',
  'images/space3.jpg'
];

// install service worker
self.addEventListener('install', (event) => {
  console.log('service workered installed!')
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(precacheResources)
    })
  )
});

// activate service worker
self.addEventListener('activate', () => {
  console.log('service worker activated!')
});

// fetch data
self.addEventListener('fetch', (event) => {
  console.log('fetch intercepted for ', event.request.url)
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse
      } else {
        return fetch(event.request);
      }
    })
  )
})
