/* Service worker: menyimpan "cangkang" aplikasi agar terbuka instan dan menampilkan
   halaman offline yang rapi bila tidak ada internet. Isi aplikasi (Apps Script) tetap
   selalu diambil terbaru dari server, sehingga deploy baru langsung terlihat. */
var V = 'st-v1';
var SHELL = ['./', 'index.html', 'config.js', 'manifest.json', 'logo.jpg', 'icon-192.png', 'offline.html'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var u = new URL(r.url);
  if (u.origin !== location.origin) return; // Apps Script/Google tidak disentuh
  if (r.mode === 'navigate') {
    // jaringan dulu (selalu versi terbaru), cadangan dari cache, lalu halaman offline
    e.respondWith(fetch(r).then(function (res) {
      var cp = res.clone(); caches.open(V).then(function (c) { c.put('index.html', cp); }); return res;
    }).catch(function () {
      return caches.match('index.html').then(function (m) { return navigator.onLine === false ? caches.match('offline.html') : (m || caches.match('offline.html')); });
    }));
    return;
  }
  // aset statis: cache dulu, perbarui di latar belakang
  e.respondWith(caches.match(r).then(function (m) {
    var net = fetch(r).then(function (res) {
      if (res && res.ok) { var cp = res.clone(); caches.open(V).then(function (c) { c.put(r, cp); }); }
      return res;
    }).catch(function () { return m; });
    return m || net;
  }));
});
