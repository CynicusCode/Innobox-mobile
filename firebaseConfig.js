import firebase from "firebase/app";
import "firebase/firestore";

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

async function fetchData() {
  const snapshot = await db.collection("your-collection-name").get();
  const data = snapshot.docs.map((doc) => doc.data());
  console.log(data);
}

fetchData();

export default db;
