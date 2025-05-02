
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export default app;



// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyAPT3_xK8dxTtz6AIDlFRlGucp9KnBz9VM",
//   authDomain: "pettro-7d9fc.firebaseapp.com",
//   projectId: "pettro-7d9fc",
//   storageBucket: "pettro-7d9fc.firebasestorage.app",
//   messagingSenderId: "529336161300",
//   appId: "1:529336161300:web:1b7d4e31932fcd59cec301",
//   measurementId: "G-D7E14GW9C7"
// };

// const app = initializeApp(firebaseConfig);
// export default app;