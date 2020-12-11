import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDxyZr8AWdanwvxBn0Rz2k8NEvyoGHr3HM",
    authDomain: "videos24-eff51.firebaseapp.com",
    databaseURL: "https://videos24-eff51-default-rtdb.firebaseio.com",
    projectId: "videos24-eff51",
    storageBucket: "videos24-eff51.appspot.com",
    messagingSenderId: "521093369796",
    appId: "1:521093369796:web:c1c55a2b6edd8289e91e91",
    measurementId: "G-T3DMR74TX0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 export default firebase