// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGAZBmSJ-TFLvyqVDNuf76diGJ1zTufMs",
  authDomain: "game-tech-funsion.firebaseapp.com",
  projectId: "game-tech-funsion",
  storageBucket: "game-tech-funsion.appspot.com",
  messagingSenderId: "617080885510",
  appId: "1:617080885510:web:254e57da4398b755590e87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
