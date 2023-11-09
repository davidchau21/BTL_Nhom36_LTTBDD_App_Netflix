// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDDV_n23sG3XkUJH6vsXgFUD_KWJUVrQo",
  authDomain: "netflix-project-151e6.firebaseapp.com",
  projectId: "netflix-project-151e6",
  storageBucket: "netflix-project-151e6.appspot.com",
  messagingSenderId: "30320513735",
  appId: "1:30320513735:web:d21992ab52ee461fb9e4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};