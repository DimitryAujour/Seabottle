import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCyKUutqH0OBeTwjMtX_pS4qv20sJ_DTE0",
    authDomain: "seabottle-c5352.firebaseapp.com",
    projectId: "seabottle-c5352",
    storageBucket: "seabottle-c5352.appspot.com",
    messagingSenderId: "274684490920",
    appId: "1:274684490920:web:450d94395ffbe52997fe9d",
    measurementId: "G-CMRYC6L7QV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { auth };
