// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJRPUnoZv8VJ7gB5g0CDbX2JCGIXXfPt8",
  authDomain: "lux360-d6a3d.firebaseapp.com",
  projectId: "lux360-d6a3d",
  storageBucket: "lux360-d6a3d.firebasestorage.app",
  messagingSenderId: "914579732028",
  appId: "1:914579732028:web:506cb98dd4273f38fb3539",
  measurementId: "G-ELWZ232HDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
