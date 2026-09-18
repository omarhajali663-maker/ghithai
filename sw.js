const CACHE='ghithai-v12-food-photos-1-20';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./foods/01.jpg','./foods/02.jpg','./foods/03.jpg','./foods/04.jpg','./foods/05.jpg','./foods/06.jpg','./foods/07.jpg','./foods/08.jpg','./foods/09.jpg','./foods/10.jpg','./foods/11.jpg','./foods/12.jpg','./foods/13.jpg','./foods/14.jpg','./foods/15.jpg','./foods/16.jpg','./foods/17.jpg','./foods/18.jpg','./foods/19.jpg','./foods/20.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
