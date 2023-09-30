// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY_YQMkxA-rl4gYTxYZHe2tuiOiWx3vjg",
  authDomain: "router-authentication-89860.firebaseapp.com",
  projectId: "router-authentication-89860",
  storageBucket: "router-authentication-89860.appspot.com",
  messagingSenderId: "445556510240",
  appId: "1:445556510240:web:fb2d95ffadc4225503f645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
export default auth;