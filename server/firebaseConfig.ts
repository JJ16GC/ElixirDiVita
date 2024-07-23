// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALrOTKOvePK8EmO5q2QWm2EHIfO3SFxXE",
  authDomain: "elixir-2c248.firebaseapp.com",
  projectId: "elixir-2c248",
  storageBucket: "elixir-2c248.appspot.com",
  messagingSenderId: "1082429732207",
  appId: "1:1082429732207:web:8135d2e3a7cf7afecea49a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
