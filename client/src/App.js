// src/App.js
import React, { useState } from 'react';
import { auth } from './firebase'; // Importuj Firebase auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // Importuj autentizační funkce
import Header from './Header'; // Nezapomeň na správnou cestu
import Footer from './Footer'; // Nezapomeň na správnou cestu
import { useNavigate } from 'react-router-dom'; // Importuj useNavigate pro přesměrování

function App() {
  const [email, setEmail] = useState(''); // Stav pro uchování e-mailu
  const [password, setPassword] = useState(''); // Stav pro uchování hesla
  const [isRegistered, setIsRegistered] = useState(true); // Stav pro určení, zda se uživatel registruje nebo přihlašuje
  const [errorMessage, setErrorMessage] = useState(''); // Stav pro uchování chybových zpráv
  const navigate = useNavigate(); // Inicializace useNavigate

  // Funkce pro registraci uživatele
  const registerUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registrace úspěšná: ", userCredential.user);
      navigate('/dashboard'); // Přesměrování po registraci
    } catch (error) {
      setErrorMessage(error.message); // Nastavení chybové zprávy
      console.error("Chyba při registraci: ", error.message);
    }
  };

  // Funkce pro přihlášení uživatele
  const loginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Přihlášení úspěšné: ", userCredential.user);
      navigate('/dashboard'); // Přesměrování po přihlášení
    } catch (error) {
      setErrorMessage(error.message); // Nastavení chybové zprávy
      console.error("Chyba při přihlášení: ", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header /> {/* Přidání hlavičky */}
      <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to SkelenAI!</h1>
      <p className="mt-4 text-gray-600">This is the beginning of your AI-powered app.</p>
      
      {errorMessage && <p className="text-red-600">{errorMessage}</p>} {/* Zobrazení chybové zprávy */}

      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <input 
        type="password" 
        placeholder="Heslo" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="mt-2 p-2 border border-gray-300 rounded"
      />
      {isRegistered ? (
        <button 
          onClick={loginUser} 
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Přihlášení
        </button>
      ) : (
        <button 
          onClick={registerUser} 
          className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Registrace
        </button>
      )}
      <p 
        onClick={() => setIsRegistered(!isRegistered)} 
        className="mt-2 text-blue-600 cursor-pointer"
      >
        {isRegistered ? "Nemáte účet? Zaregistrujte se." : "Máte účet? Přihlaste se."}
      </p>
      <Footer /> {/* Přidání patičky */}
    </div>
  );
}

export default App;
