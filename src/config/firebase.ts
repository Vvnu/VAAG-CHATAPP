import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBa36XlP-8p4MHNO3JRWAnpKkZR1eWgjqo",
  authDomain: "chatapp-fc5ba.firebaseapp.com",
  projectId: "chatapp-fc5ba",
  storageBucket: "chat-app-stackblitz.appspot.com",
  messagingSenderId: "847592378453",
  appId: "1:847592378453:web:d5f9b3e8c4f6a7b2e1d0c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);