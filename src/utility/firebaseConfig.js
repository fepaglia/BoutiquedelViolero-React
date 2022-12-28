// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgkzfCdl5Hnde3MFaYk5NqSt87ju8JgKM",
  authDomain: "boutiqueviolero.firebaseapp.com",
  projectId: "boutiqueviolero",
  storageBucket: "boutiqueviolero.appspot.com",
  messagingSenderId: "692674488442",
  appId: "1:692674488442:web:6f0d296e999a5a064a73c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
