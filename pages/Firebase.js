import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}from 'firebase/firestore'
import {getStorage}from 'firebase/storage'
import {getAuth, initializeAuth,getReactNativePersistence}from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQRQ0m-jx6I_gi-a1DASQ6vaXgLaZ9FdQ",
    authDomain: "disney-3e612.firebaseapp.com",
    projectId: "disney-3e612",
    storageBucket: "disney-3e612.appspot.com",
    messagingSenderId: "283301735502",
    appId: "1:283301735502:web:770b530d4b18362700a71f",
    measurementId: "G-18QQT7SBG4"
};
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const storage=getStorage();
const db=getFirestore();
const auth=getAuth();
export {auth,storage}
export default db