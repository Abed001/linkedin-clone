import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAAncoSImg7XjBtil2SoGPCPIS2hUCQIa0",
  authDomain: "linkedin-clone-831c6.firebaseapp.com",
  projectId: "linkedin-clone-831c6",
  storageBucket: "linkedin-clone-831c6.appspot.com",
  messagingSenderId: "48907991061",
  appId: "1:48907991061:web:bb92128929670b0324761c"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export default { db, auth };