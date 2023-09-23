import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyABsh5RciGSrX2iyjFKTnC1k0vzBEz2UVY",
  authDomain: "botogram-ca064.firebaseapp.com",
  projectId: "botogram-ca064",
  storageBucket: "botogram-ca064.appspot.com",
  messagingSenderId: "491761691080",
  appId: "1:491761691080:web:622adb07974de4a59a78fd"
  }).auth();