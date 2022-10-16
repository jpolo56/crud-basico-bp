// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/getFirestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOQMFRfmvAQtw_MSzT781bqGbW9rPmPU",
  authDomain: "crud-basico-bp-327e3.firebaseapp.com",
  projectId: "crud-basico-bp-327e3",
  storageBucket: "crud-basico-bp-327e3.appspot.com",
  messagingSenderId: "617713320667",
  appId: "1:617713320667:web:6ad810e0fdd895f13242fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}