import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1cEFak7sK8p17GPRoJqcohlX9sfR_sCA",
  authDomain: "clone-12de7.firebaseapp.com",
  databaseURL: "https://clone-12de7.firebaseio.com",
  projectId: "clone-12de7",
  storageBucket: "clone-12de7.appspot.com",
  messagingSenderId: "422345565306",
  appId: "1:422345565306:web:c8b42de1cf5b9eae7a07c3",
  measurementId: "G-W4ZKZ4PF4P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
