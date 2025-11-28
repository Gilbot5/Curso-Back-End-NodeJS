import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID 
}; 
 
// Initialize Firebase:
const app = initializeApp(firebaseConfig); 
 
// Initialize Firestore:
const db = getFirestore(app); 
 
export { db };