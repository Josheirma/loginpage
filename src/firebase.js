import { getAuth } from "firebase/auth"; // Optional if using auth
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG4cH1WMpSUXXXwXhzjAVoT__YwFPNQpA",
  authDomain: "auth-with-features.firebaseapp.com",
  projectId: "auth-with-features",
  storageBucket: "auth-with-features.firebasestorage.app",
  messagingSenderId: "798530981071",
  appId: "1:798530981071:web:1dc5bb5e6bd479f9d4fbba",
  measurementId: "G-XLH1Q9GNY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
