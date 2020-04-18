
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/testeresponsividade/sw.js')
      .then(function () {
        console.log('service worker registered');
      });
    //   .catch(function () {
    //     console.warn('service worker failed');
    //   });
  }