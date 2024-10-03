const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app'); // Import Firebase
const { getFirestore } = require('firebase/firestore'); // Import Firestore
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Firebase konfigurace
const firebaseConfig = {
    apiKey: "AIzaSyDyBlUm1WODCmw-Piv3itNBmir76j_Ah6U", // Zadej svůj API klíč
    authDomain: "skelenai.firebaseapp.com",
    projectId: "skelenai",
    storageBucket: "skelenai.appspot.com",
    messagingSenderId: "115930172869",
    appId: "1:115930172869:web:878f368badd9d28b4a4fac" 
};

// Inicializace aplikace Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Testovací endpoint
app.get('/', (req, res) => {
    res.send('Hello from the Firebase server!');
});

// Spuštění serveru
app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
});
