import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AlzaSyDaYr9qtBJmJ62Xp0J2wr-p28PLI3Je918",
  authDomain: "sliceclips-c6470.firebaseapp.com",
  projectId: "sliceclips-c6470",
  storageBucket: "sliceclips-c6470.firebasestorage.app",
  messagingSenderId: "240972457599",
  appId: "1:240972457599:web:0337a89555e29234bd814a",
  measurementId: "G-2XNC2PY9G3"
};

// Safely initialize for Next.js SSR environment
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
