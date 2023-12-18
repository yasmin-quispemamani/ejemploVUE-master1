import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcLQ-U66D38wyVIxOSDndLyPu6ANrwTVM",
  authDomain: "iestpchupa2023-c5e5f.firebaseapp.com",
  projectId: "iestpchupa2023-c5e5f",
  storageBucket: "iestpchupa2023-c5e5f.appspot.com",
  messagingSenderId: "551717053794",
  appId: "1:551717053794:web:51b123d78fa9c71e04383b"

};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };