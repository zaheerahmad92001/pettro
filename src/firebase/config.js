// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPT3_xK8dxTtz6AIDlFRlGucp9KnBz9VM",
  authDomain: "pettro-7d9fc.firebaseapp.com",
  projectId: "pettro-7d9fc",
  storageBucket: "pettro-7d9fc.firebasestorage.app",
  messagingSenderId: "529336161300",
  appId: "1:529336161300:web:1b7d4e31932fcd59cec301",
  measurementId: "G-D7E14GW9C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;