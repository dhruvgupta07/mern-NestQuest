// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestquest-4cda0.firebaseapp.com",
  projectId: "nestquest-4cda0",
  storageBucket: "nestquest-4cda0.appspot.com",
  messagingSenderId: "884238873207",
  appId: "1:884238873207:web:96466f11268fb9eda90c72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);