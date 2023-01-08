import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

let app = null;
let auth = null;

export const initFirebase = () => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "feed-me-web.firebaseapp.com",
    projectId: "feed-me-web",
    storageBucket: "feed-me-web.appspot.com",
    messagingSenderId: "638586946953",
    appId: "1:638586946953:web:a26bef65833f0722aecd58",
    measurementId: "G-7EZ7TDSG4N",
  };

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
};

export const createNewUser = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return {
    id: res.user.uid,
    name: res.user.email,
  };
};

export const SignInExistingUser = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return {
    id: res.user.uid,
    name: res.user.email,
  };
};
