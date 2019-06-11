import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpLO43_C5Sun8ZCXQ-URjlA41eIVSJOxQ",
  authDomain: "burger-queen-225a7.firebaseapp.com",
  databaseURL: "https://burger-queen-225a7.firebaseio.com",
  projectId: "burger-queen-225a7",
  storageBucket: "burger-queen-225a7.appspot.com",
  messagingSenderId: "396192167304",
  appId: "1:396192167304:web:08b5f3adb890d63c"
};

firebase.initializeApp(firebaseConfig);

export default firebase;