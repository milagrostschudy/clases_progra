import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyClCuJMtBn1TpFbrLI_44zrJx3vzbPn1uI",
  authDomain: "proyectofirebase-40a32.firebaseapp.com",
  projectId: "proyectofirebase-40a32",
  storageBucket: "proyectofirebase-40a32.firebasestorage.app",
  messagingSenderId: "906846785088",
  appId: "1:906846785088:web:25fdb5dce86453d0c1d9a5"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
