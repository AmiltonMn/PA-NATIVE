// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTrFL7vpSvvxmLt0uH3rQoy8FjtHqzKA",
  authDomain: "batata-e8817.firebaseapp.com",
  projectId: "batata-e8817",
  storageBucket: "batata-e8817.appspot.com",
  messagingSenderId: "890888362227",
  appId: "1:890888362227:web:45cacce234020bbb04ff86",
  measurementId: "G-GKD60TM6S9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);