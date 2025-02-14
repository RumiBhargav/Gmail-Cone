// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  {getFirestore}  from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjhsXPVFJ1On9HhPaGfap1-683HoeFrKQ",
  authDomain: "rumi-s-platform.firebaseapp.com",
  projectId: "rumi-s-platform",
  storageBucket: "rumi-s-platform.firebasestorage.app",
  messagingSenderId: "680093617916",
  appId: "1:680093617916:web:eaefaa79c61dd8f86a5179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();// provider is nothing but login with google login with email