// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

// Testovací registrace
const registerUser = async (email, password) => {
  console.log("Zahájení registrace uživatele..."); // Přidaný log
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registrace úspěšná: ", userCredential.user);
  } catch (error) {
    console.error("Chyba při registraci: ", error.message);
  }
};

registerUser("example@example.com", "password123");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
