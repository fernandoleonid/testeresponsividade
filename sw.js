self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('video-store').then(function(cache) {
      return cache.addAll([
        '/testeresponsividade/',
        '/testeresponsividade/index.html',
        '/testeresponsividade/index.js',
        '/testeresponsividade/css/reset.css',
        '/testeresponsividade/css/style.css',
        '/testeresponsividade/img/icon.png',
        '/testeresponsividade/img/icon144.png'
      ]);
    })
  );
 });
 
 self.addEventListener('fetch', function(e) {
   console.log(e.request.url);
   e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   );
 });