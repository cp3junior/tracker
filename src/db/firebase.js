// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpt2WSdwUAk8NTW_AkKLj7BkAwOqQEcac",
  authDomain: "vola-e0195.firebaseapp.com",
  projectId: "vola-e0195",
  storageBucket: "vola-e0195.appspot.com",
  messagingSenderId: "135141418427",
  appId: "1:135141418427:web:b2007b90d8d46d65b9109e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
