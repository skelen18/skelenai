// src/firebase.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tady vlož svou Firebase konfiguraci
const firebaseConfig = {
  apiKey: "AIzaSyDyBlUm1WODCmw-Piv3itNBmir76j_Ah6U",
  authDomain: "skelenai.firebaseapp.com",
  projectId: "skelenai",
  storageBucket: "skelenai.appspot.com",
  messagingSenderId: "115930172869",
  appId: "1:115930172869:web:878f368badd9d28b4a4fac" 
};

// Inicializace Firebase
const app = initializeApp(firebaseConfig);

// Exportuj auth a db
export const auth = getAuth(app);
export const db = getFirestore(app);

// Inicializace autentizace
const auth = getAuth(app);

// Přihlášení uživatele
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Přihlášení bylo úspěšné
    const user = userCredential.user;
    console.log("Přihlášení úspěšné: ", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Chyba při přihlášení: ", errorCode, errorMessage);
  });