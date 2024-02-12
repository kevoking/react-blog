// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoqvppc8hEx6kYtMnFR8adLXmZBsRRAKg",
  authDomain: "ufalme-c2e9e.firebaseapp.com",
  projectId: "ufalme-c2e9e",
  storageBucket: "ufalme-c2e9e.appspot.com",
  messagingSenderId: "1007314357888",
  appId: "1:1007314357888:web:a8a445905727c864f02065",
  measurementId: "G-PV0BQ348SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app)