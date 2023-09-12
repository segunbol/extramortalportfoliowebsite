
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyByJqKHRjisb8ryZz9-6kpFor8gqcnNwZk",
  authDomain: "extramortal-portfolio.firebaseapp.com",
  projectId: "extramortal-portfolio",
  storageBucket: "extramortal-portfolio.appspot.com",
  messagingSenderId: "103511628499",
  appId: "1:103511628499:web:66aa05c64d1b65865bd226",
  measurementId: "G-V6F1TMFCDT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);