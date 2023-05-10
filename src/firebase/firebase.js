// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5FqiTZ1n1sNyaKceKwu_raRJ8Ve0PKWc",
  authDomain: "netflix-e90c5.firebaseapp.com",
  projectId: "netflix-e90c5",
  storageBucket: "netflix-e90c5.appspot.com",
  messagingSenderId: "721888028610",
  appId: "1:721888028610:web:d87acb2e421408d78a185b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);