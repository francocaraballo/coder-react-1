import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMVIHEwK1WyXkq8Oj_DyEQ0DnCXfd5bMs",
  authDomain: "milosport-7342d.firebaseapp.com",
  projectId: "milosport-7342d",
  storageBucket: "milosport-7342d.appspot.com",
  messagingSenderId: "654426567458",
  appId: "1:654426567458:web:7feada915cd87b2d442b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);