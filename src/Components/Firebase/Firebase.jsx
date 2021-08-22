import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAb7mgsZi_lb7J8x5Np6YHFO8d7qN-gFGU",
    authDomain: "foodappbyhasnat.firebaseapp.com",
    projectId: "foodappbyhasnat",
    storageBucket: "foodappbyhasnat.appspot.com",
    messagingSenderId: "635273178400",
    appId: "1:635273178400:web:349111b9cae19e7997bb45"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export  const auth = firebase.auth();