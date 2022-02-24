// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHLZYTpjdxkq_iF7G2AmG5pgNnQcSaZCU",
  authDomain: "wefit-7b1e5.firebaseapp.com",
  projectId: "wefit-7b1e5",
  storageBucket: "wefit-7b1e5.appspot.com",
  messagingSenderId: "1078300354928",
  appId: "1:1078300354928:web:a8232dbf9e84d3461447b5",
  measurementId: "G-J06XKTF10T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);