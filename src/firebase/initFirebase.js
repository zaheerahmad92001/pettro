// firebase/initFirebase.js
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "./config";

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
