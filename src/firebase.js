import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAv4MOSebLSoYDD1T_-z5svj8PFtqgj_6w",
  authDomain: "fightcovid-ecfc5.firebaseapp.com",
  databaseURL: "https://fightcovid-ecfc5.firebaseio.com",
  projectId: "fightcovid-ecfc5",
  storageBucket: "fightcovid-ecfc5.appspot.com",
  messagingSenderId: "748115836885",
  appId: "1:748115836885:web:e4e137e1c75d0d3626875c"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
