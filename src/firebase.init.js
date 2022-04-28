// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwa3EMLLr_zrefKFdpScI8l2AvQu_lk4",
  authDomain: "cargel-logistic-cargo.firebaseapp.com",
  projectId: "cargel-logistic-cargo",
  storageBucket: "cargel-logistic-cargo.appspot.com",
  messagingSenderId: "490537130269",
  appId: "1:490537130269:web:18275eae69cb8660cf69f4"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;