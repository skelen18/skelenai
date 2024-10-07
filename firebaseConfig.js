import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tvůj-api-key",
  authDomain: "tvůj-auth-domain",
  projectId: "tvůj-project-id",
  storageBucket: "tvůj-storage-bucket",
  messagingSenderId: "tvůj-messaging-sender-id",
  appId: "tvůj-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
