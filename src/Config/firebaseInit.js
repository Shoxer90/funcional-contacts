import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6yKUSb-oMEXmabJn_p53-hdueBeC6j5o",
  authDomain: "functionalcontacts.firebaseapp.com",
  projectId: "functionalcontacts",
  storageBucket: "functionalcontacts.appspot.com",
  messagingSenderId: "447499685666",
  appId: "1:447499685666:web:2c6b4ad6637f790f17df7b",
};

export const fireDB = initializeApp(firebaseConfig);
export const fireStorage = getStorage(fireDB);
export const fireStore = getFirestore(fireDB);