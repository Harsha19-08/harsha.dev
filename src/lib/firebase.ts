import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - uses environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAQONNGYVfAP6DqXbbqqpM3irQ4Ngn9YMQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "harshadev19.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "harshadev19",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "harshadev19.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "595916097145",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:595916097145:web:YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
