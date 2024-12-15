// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDTFN4ai57Q-CO1LvqOEouoPrkfGeRMK4",
  authDomain: "bookstore-c1443.firebaseapp.com",
  projectId: "bookstore-c1443",
  storageBucket: "bookstore-c1443.firebasestorage.app",
  messagingSenderId: "764415996220",
  appId: "1:764415996220:web:28ec38ae7ebef6f9a76e39",
  measurementId: "G-CKJTD1KQSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;





