import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpLO43_C5Sun8ZCXQ-URjlA41eIVSJOxQ",
  authDomain: "burger-queen-225a7.firebaseapp.com",
  databaseURL: "https://burger-queen-225a7.firebaseio.com",
  projectId: "burger-queen-225a7",
  storageBucket: "burger-queen-225a7.appspot.com",
  messagingSenderId: "396192167304",
  appId: "1:396192167304:web:d477d38cf12729d1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

