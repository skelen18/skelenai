// firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "tvůj_api_key",
    authDomain: "tvůj_auth_domain",
    projectId: "tvůj_project_id",
    storageBucket: "tvůj_storage_bucket",
    messagingSenderId: "tvůj_messaging_sender_id",
    appId: "tvůj_app_id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
