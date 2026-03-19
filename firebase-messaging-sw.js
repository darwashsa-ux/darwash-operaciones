// Firebase Messaging Service Worker
// Maneja notificaciones push cuando la app está en segundo plano o cerrada

importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            "AIzaSyBro30HB6M-SxkasQVqYUPRpmnsLpHokNE",
  projectId:         "darwash-operaciones",
  messagingSenderId: "95599706052",
  appId:             "1:95599706052:web:d9cffd820e745bf5356e91"
});

const messaging = firebase.messaging();

// Mostrar notificación cuando la app está en background
messaging.onBackgroundMessage((payload) => {
  console.log('Push background recibido:', payload);

  const { title, body } = payload.notification;

  self.registration.showNotification(title, {
    body,
    icon:  '/darwash-operaciones/icon.svg',
    badge: '/darwash-operaciones/icon.svg',
    data:  payload.data,
    actions: [
      { action: 'abrir', title: 'Abrir app' }
    ]
  });
});

// Al hacer clic en la notificación — abrir la app
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow('https://darwashsa-ux.github.io/darwash-operaciones/')
  );
});
