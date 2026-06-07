import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "duotask-pro.firebaseapp.com",
  projectId: "duotask-pro",
  storageBucket: "duotask-pro.firebasestorage.app",
  messagingSenderId: "805414600171",
  appId: "1:805414600171:web:22ea66481bb7a76169edae",
  measurementId: "G-BJHJX062EW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
