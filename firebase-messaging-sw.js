importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDCpkExF7Jlu-amQ9boiwXb5SfZ6t4Jdro",
  authDomain: "gandini-40.firebaseapp.com",
  projectId: "gandini-40",
  storageBucket: "gandini-40.firebasestorage.app",
  messagingSenderId: "809929371965",
  appId: "1:809929371965:web:f8bcd903fde9b1e3d91554"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Gandini 4.0';
  const options = {
    body: payload.notification?.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
  };
  self.registration.showNotification(title, options);
});
