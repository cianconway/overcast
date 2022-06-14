// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbrGaIf_T3Um-lBVLekX8EkttXBmKwLJI",
  authDomain: "overcast-58598.firebaseapp.com",
  projectId: "overcast-58598",
  storageBucket: "overcast-58598.appspot.com",
  messagingSenderId: "1085117108462",
  appId: "1:1085117108462:web:6e97ef5a91acaa65bf63ff",
  measurementId: "G-15SBXFTC2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);