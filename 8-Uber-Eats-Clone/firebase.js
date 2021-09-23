import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_Lcr-Bw2DXbTFj3kUgJnbb6RfmKLfxhc",
  authDomain: "uber-eats-clone-863a0.firebaseapp.com",
  projectId: "uber-eats-clone-863a0",
  storageBucket: "uber-eats-clone-863a0.appspot.com",
  messagingSenderId: "322390955701",
  appId: "1:322390955701:web:6b281ae1cb0bc2a17450fc",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
