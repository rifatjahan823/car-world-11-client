// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCCdwKEZ8fMN3gO6_BGgDWOjn4NH62ktk",
  authDomain: "car-world-db4d0.firebaseapp.com",
  projectId: "car-world-db4d0",
  storageBucket: "car-world-db4d0.appspot.com",
  messagingSenderId: "952103649929",
  appId: "1:952103649929:web:793c54e37161debadf3c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
