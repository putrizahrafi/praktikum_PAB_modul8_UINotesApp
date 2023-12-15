import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBEgHKNBxypNI75ZEuGmdagMwsxXilqR_A",
  authDomain: "notesapp-puput.firebaseapp.com",
  databaseURL: "https://notesapp-puput-default-rtdb.firebaseio.com",
  projectId: "notesapp-puput",
  storageBucket: "notesapp-puput.appspot.com",
  messagingSenderId: "999132915938",
  appId: "1:999132915938:web:070ffd4389254b48c3d6bb"
});

const FIREBASE = firebase;

export default FIREBASE;
