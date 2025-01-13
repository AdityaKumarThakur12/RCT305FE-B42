import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhqJd9U4JlEieleRiSUnPYarqKfMxbAdI",
  authDomain: "movies-routing.firebaseapp.com",
  projectId: "movies-routing",
  storageBucket: "movies-routing.firebasestorage.app",
  messagingSenderId: "22292880729",
  appId: "1:22292880729:web:f30239047034a430844048",
  databaseURL: "https://movies-routing-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);