// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, setUserProperties } from 'firebase/analytics';
import { fetchAndActivate, getRemoteConfig } from 'firebase/remote-config';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAd-zpQsy9W2d27Hz-WzqGiKABF8UzQJ0E',
  authDomain: 'optibusdemo.firebaseapp.com',
  databaseURL: 'https://optibusdemo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'optibusdemo',
  storageBucket: 'optibusdemo.appspot.com',
  messagingSenderId: '263336697244',
  appId: '1:263336697244:web:28433bb76fb31637743c59',
  measurementId: 'G-J9RYECWNGN'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
//connectFirestoreEmulator(db, 'localhost', 8080);
//connectAuthEmulator(auth, 'http://localhost:9099');
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
export const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 1000;
fetchAndActivate(remoteConfig).then(() => {});

logEvent(analytics, 'Hello user', {
  content_type: 'image',
  content_id: 'P12453'
});
setUserProperties(analytics, { favorite_food: 'apples' });
