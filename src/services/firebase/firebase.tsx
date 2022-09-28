// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAd-zpQsy9W2d27Hz-WzqGiKABF8UzQJ0E',
  authDomain: 'optibusdemo.firebaseapp.com',
  projectId: 'optibusdemo',
  storageBucket: 'optibusdemo.appspot.com',
  messagingSenderId: '263336697244',
  appId: '1:263336697244:web:28433bb76fb31637743c59',
  measurementId: 'G-J9RYECWNGN'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);