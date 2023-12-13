//firebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8PnhBUJGgjZyAGrs3ndzkdKgwBM1w4f0",
  authDomain: "innobox-mobile.firebaseapp.com",
  projectId: "innobox-mobile",
  storageBucket: "innobox-mobile.appspot.com",
  messagingSenderId: "491278556739",
  appId: "1:491278556739:web:d5f272d79c876e62c57ef6",
  measurementId: "G-RPB854FB23",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export const fetchData = async (collectionName) => {
  try {
    const snapshot = await db.collection(collectionName).get();
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching data: ", error);
    return []; // Return an empty array in case of error
  }
};

export default db;
