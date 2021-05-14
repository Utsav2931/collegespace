// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjmuFgxSoqXr-29S0TzFHkG48hbqwMOBw",
  authDomain: "collegespace-bf8a2.firebaseapp.com",
  projectId: "collegespace-bf8a2",
  storageBucket: "collegespace-bf8a2.appspot.com",
  messagingSenderId: "1092952891965",
  appId: "1:1092952891965:web:8c9d8444b7e1fe20414054",
  measurementId: "G-0LPKSQL8E5",
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

firebase.firestore();

export default firebase;
