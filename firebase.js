// Firebase connection for Birthday Secret Mission
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDb4_Bco8yVGYDFdZgzVviizVAnFzviTaI",
    authDomain: "birthday-secret-mission.firebaseapp.com",
    projectId: "birthday-secret-mission",
    storageBucket: "birthday-secret-mission.firebasestorage.app",
    messagingSenderId: "161562581733",
    appId: "1:161562581733:web:f1b256f677d919657f520c",
    measurementId: "G-TK1LYM1DVC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
