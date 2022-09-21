import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlTmVz_oH6uvBO7bIpcBnFPi2rhi1wxMA",
  authDomain: "jovethtecnologia-d15a2.firebaseapp.com",
  databaseURL: "https://jovethtecnologia-d15a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jovethtecnologia-d15a2",
  storageBucket: "jovethtecnologia-d15a2.appspot.com",
  messagingSenderId: "90905529948",
  appId: "1:90905529948:web:7333a20cf85f2daf65a099",
  measurementId: "G-KKFFV7SQ63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();