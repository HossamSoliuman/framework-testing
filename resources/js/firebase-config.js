// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXNtIk6uLjQtf98JCf20cdiUoSYwU9Fk4",
    authDomain: "saada-4a54d.firebaseapp.com",
    projectId: "saada-4a54d",
    storageBucket: "saada-4a54d.appspot.com",
    messagingSenderId: "581263205971",
    appId: "1:581263205971:web:01733857d047716a1d08a6",
    measurementId: "G-EX2497D5KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Setup Recaptcha
const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved - allow phone number verification
        }
    }, auth);
};

// Function to send OTP
const sendOTP = (phoneNumber) => {
    setupRecaptcha();

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP sent!");
        })
        .catch((error) => {
            console.error("Error during signInWithPhoneNumber", error);
        });
};

// Function to verify OTP
const verifyOTP = (otp) => {
    window.confirmationResult.confirm(otp)
        .then((result) => {
            const user = result.user;
            alert("Phone number verified successfully!");
        })
        .catch((error) => {
            console.error("Error during confirmationResult.confirm", error);
        });
};

export { sendOTP, verifyOTP };
