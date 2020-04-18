// I'm a new service worker


// self referes to the service work
// after registering worker's home in index.html, we need to
// set up installiation
self.addEventListener('install', event => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

// once installing is completed, we want to activate the worker
self.addEventListener('activate', event => {
  console.log('Service worker activating...')
});

// fetch data from domain
self.addEventListener('fetch', event => {
  console.log('fetching:', event.request.url)
});