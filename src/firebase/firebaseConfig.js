import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Firebase configuration - Replace with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyBwt0-ntcVTQVJWrH43rvPSSJR8AEJIdB8",
  authDomain: "assignementproject-8b8ea.firebaseapp.com",
  projectId: "assignementproject-8b8ea",
  storageBucket: "assignementproject-8b8ea.appspot.com",
  messagingSenderId: "74492723561",
  appId: "1:74492723561:web:f8577e9364a4ef27933df8",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set up Google and GitHub authentication providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
