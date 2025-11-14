import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQONNGYVfAP6DqXbbqqpM3irQ4Ngn9YMQ",
  authDomain: "harshadev19.firebaseapp.com",
  projectId: "harshadev19",
  storageBucket: "harshadev19.firebasestorage.app",
  messagingSenderId: "595916097145",
  appId: "1:595916097145:web:YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
