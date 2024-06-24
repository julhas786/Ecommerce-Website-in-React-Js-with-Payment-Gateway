// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX5vrp_oGs7KelCFdzsg9mDl12lvQlKAE",
  authDomain: "bookstore-615a8.firebaseapp.com",
  databaseURL: "https://bookstore-615a8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookstore-615a8",
  storageBucket: "bookstore-615a8.appspot.com",
  messagingSenderId: "646717924634",
  appId: "1:646717924634:web:3d9df285a18cd7df85f8a3",
  measurementId: "G-EPKMJEDSSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
