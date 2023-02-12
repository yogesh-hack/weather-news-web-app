// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyApHm6ru7pmcecpn_SSyP6GWZ5aSHSs5mI",
  authDomain: "weather-news-2fa31.firebaseapp.com",
  projectId: "weather-news-2fa31",
  storageBucket: "weather-news-2fa31.appspot.com",
  messagingSenderId: "34848987041",
  appId: "1:34848987041:web:75acc225f14f1f71059de0",
  measurementId: "G-EFW20DF5ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app,auth}
