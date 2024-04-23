import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNDCy94EQsndTidFqR5XchxHKTTWh37NY",
    authDomain: "jobportal-8e28d.firebaseapp.com",
    databaseURL: "https://jobportal-8e28d-default-rtdb.firebaseio.com",
    projectId: "jobportal-8e28d",
    storageBucket: "jobportal-8e28d.appspot.com",
    messagingSenderId: "207499970813",
    appId: "1:207499970813:web:6ffa4cc4d292d803a61694"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };