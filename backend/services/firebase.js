import admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//Those lines are used to import JSON files in es module files
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../firebase-key.json");

let adminAuth = null;
let app = null;
let auth = null;

export const initFirebase = () => {
  //We are using both auth and admin auth because to delete users you must use firebase-admin package
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  adminAuth = admin.auth();

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
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return {
      id: res.user.uid,
      name: res.user.email,
    };
  } catch (error) {
    return error.code;
  }
};

export const SignInExistingUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return {
      id: res.user.uid,
      name: res.user.email,
    };
  } catch (error) {
    return error.code;
  }
};

export const deleteExistingUser = async (userId) => {
  try {
    await adminAuth.deleteUser(userId);
    return "User deleted";
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
