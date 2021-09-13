
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjymLE_tew8Mq8Pwo1deJo1vC1HlwNzzw",
    authDomain: "popchat-a154b.firebaseapp.com",
    projectId: "popchat-a154b",
    storageBucket: "popchat-a154b.appspot.com",
    messagingSenderId: "305079708425",
    appId: "1:305079708425:web:ee7108272428e1a4b901d8"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    const db = app.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export {db, auth, provider};