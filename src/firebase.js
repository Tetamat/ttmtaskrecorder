// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signOut as FBsignOut } from "firebase/auth";
import { firebaseConfig } from "@/firebase.config.js";

// A file src/firebase.config.js contains app's Firebase configuration as follow
// export const firebaseConfig = {
//     apiKey: "***",
//     authDomain: "***.firebaseapp.com",
//     projectId: "***",
//     storageBucket: "***.firebasestorage.app",
//     messagingSenderId: "***",
//     appId: "*:*:web:*",
//     measurementId: "***"
//   };


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const tasksCollection = collection(db, "tasks");
const analytics = getAnalytics(firebaseApp);

export { db, analytics, auth, firebaseApp, tasksCollection };
export const auth = getAuth();
export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}
export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
export function signOut() {
    return FBsignOut(auth);
}