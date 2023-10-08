// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLxTttQRfmQVsXam8-SFXb9vFhYJGN_lI",
  authDomain: "healthtracker-3202e.firebaseapp.com",
  databaseURL: "https://healthtracker-3202e-default-rtdb.firebaseio.com",
  projectId: "healthtracker-3202e",
  storageBucket: "healthtracker-3202e.appspot.com",
  messagingSenderId: "1004953969059",
  appId: "1:1004953969059:web:cfcc2c66bb5ef5b41dba16",
};
// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
