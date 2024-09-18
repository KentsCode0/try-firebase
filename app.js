// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUXzhoZ3RSaZheQvOBaakF_5h8E7dkKNg",
  authDomain: "try-firebase-8e44a.firebaseapp.com",
  projectId: "try-firebase-8e44a",
  storageBucket: "try-firebase-8e44a.appspot.com",
  messagingSenderId: "497561552200",
  appId: "1:497561552200:web:04275533250f36b2281f7d",
  measurementId: "G-FVC99SVRYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);