// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmN7d5A6ZBYw4fFl2vGwSxLYg-qSTstWw",
  authDomain: "warehouse-management-site.firebaseapp.com",
  projectId: "warehouse-management-site",
  storageBucket: "warehouse-management-site.appspot.com",
  messagingSenderId: "823849892134",
  appId: "1:823849892134:web:28f424dee1261655a3a9e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;