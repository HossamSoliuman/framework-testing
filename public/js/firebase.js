// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpgCpdNyixuG-29ohRsG46KH1p9nKZtE4",
  authDomain: "lara-10-test.firebaseapp.com",
  projectId: "lara-10-test",
  storageBucket: "lara-10-test.appspot.com",
  messagingSenderId: "1024739151009",
  appId: "1:1024739151009:web:0a5d9418cbff46a3fd34e0",
  measurementId: "G-1NRLK2NTV1",
  databaseURL: "https://lara-10-test-default-rtdb.firebaseio.com/" // Add the database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize Realtime Database

export { database };
