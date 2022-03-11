// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeiBuEkNwW4JM8oBpk6IbecyK8BXhW620",
    authDomain: "mastermente-7d69b.firebaseapp.com",
    projectId: "mastermente-7d69b",
    storageBucket: "mastermente-7d69b.appspot.com",
    messagingSenderId: "996645624575",
    appId: "1:996645624575:web:f6dcd553840ce14e444aca",
    measurementId: "G-EWNSGRVE6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);