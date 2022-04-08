import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpRsTBBiV6sVJYwOoAPr5tbvrukpevB98",
  authDomain: "router-firebase-integrat-c1650.firebaseapp.com",
  projectId: "router-firebase-integrat-c1650",
  storageBucket: "router-firebase-integrat-c1650.appspot.com",
  messagingSenderId: "1073721517379",
  appId: "1:1073721517379:web:0cfcfb4fe732a04dd7fbf6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;