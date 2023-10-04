// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, getfirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTqJo874Wy_K73dwMU0SSbDpeRudFfkvM",
  authDomain: "frontendbeast-60d7c.firebaseapp.com",
  projectId: "frontendbeast-60d7c",
  storageBucket: "frontendbeast-60d7c.appspot.com",
  messagingSenderId: "1069416913514",
  appId: "1:1069416913514:web:d2e1b325936acee9c64813",
  measurementId: "G-65421J24C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();