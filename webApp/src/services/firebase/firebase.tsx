// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { fetchAndActivate, getRemoteConfig } from "firebase/remote-config";
import { getFirestore } from "firebase/firestore";

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

export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const remoteConfig = getRemoteConfig(app);
fetchAndActivate(remoteConfig).then(() => {});
