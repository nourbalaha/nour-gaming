import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBm0OSbcwZyrDF8xmfVmcvPQIu_8xLr_tg",
    authDomain: "nour-gaming-db.firebaseapp.com",
    databaseURL: "https://nour-gaming-db.firebaseio.com",
    projectId: "nour-gaming-db",
    storageBucket: "nour-gaming-db.appspot.com",
    messagingSenderId: "553383607611",
    appId: "1:553383607611:web:2de9da4a8f888dae95cb1e",
    measurementId: "G-WD9PZGT3BP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;