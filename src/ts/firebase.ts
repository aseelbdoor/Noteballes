// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjZbz0Uj4zGrpHYGlYiTyoS0CE1j9OMPs",
  authDomain: "noteballes.firebaseapp.com",
  projectId: "noteballes",
  storageBucket: "noteballes.appspot.com",
  messagingSenderId: "142112435926",
  appId: "1:142112435926:web:e69807a0eed9d59a406377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{
    db
}