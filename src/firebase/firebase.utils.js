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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...additionalData})
        } catch(error) {
            console.log("error creating user", error.message )
        }
    }

}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;