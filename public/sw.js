const CACHE_NAME = "event-countdown-v1";
const urlsToCache = [];

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker caching app shell.");
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

self.addEventListener("push", function (event) {
  if (event.data) {
    const pushData = event.data.json();
    const options = {
      body: pushData.body,
      icon: "/icons/logo-192.png",
      badge: "/icons/logo-192.png",
    };

    event.waitUntil(
      self.registration.showNotification(pushData.title, options)
    );
  }
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
