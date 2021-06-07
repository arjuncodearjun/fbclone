import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB3NKM2mMiL0XZUWpQQjmvSYTR2KKshPo8",
    authDomain: "facebook-clone-7848e.firebaseapp.com",
    projectId: "facebook-clone-7848e",
    storageBucket: "facebook-clone-7848e.appspot.com",
    messagingSenderId: "548262448157",
    appId: "1:548262448157:web:451c2508e1262193268af4"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


  const db = app.firestore();

  const storage = firebase.storage();

  export {db, storage}