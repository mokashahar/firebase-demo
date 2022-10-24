/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = self.firebase.initializeApp({
  apiKey: 'AIzaSyAd-zpQsy9W2d27Hz-WzqGiKABF8UzQJ0E',
  authDomain: 'optibusdemo.firebaseapp.com',
  databaseURL: 'https://optibusdemo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'optibusdemo',
  storageBucket: 'optibusdemo.appspot.com',
  messagingSenderId: '263336697244',
  appId: '1:263336697244:web:28433bb76fb31637743c59',
  measurementId: 'G-J9RYECWNGN'
});

const messaging = self.firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
