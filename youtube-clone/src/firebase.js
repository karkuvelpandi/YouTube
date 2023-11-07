import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4oxriDL89T6HFIJueFCDK8rXPh0vieGM",
  authDomain: "ytclone-1997.firebaseapp.com",
  projectId: "ytclone-1997",
  storageBucket: "ytclone-1997.appspot.com",
  messagingSenderId: "964881863221",
  appId: "1:964881863221:web:efa59f299b4e29f0b6177c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth, firebaseConfig };
