import 'firebase/firestore';

import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var app = {
    apiKey: "AIzaSyBS7ef9JAO37q26WMiejTBytss1igSlnx4",
    authDomain: "alkemy-react-challenge-abe86.firebaseapp.com",
    projectId: "alkemy-react-challenge-abe86",
    storageBucket: "alkemy-react-challenge-abe86.appspot.com",
    messagingSenderId: "86946387821",
    appId: "1:86946387821:web:98fd7768b9e96d4c9f6c64",
    measurementId: "G-CR7XKVY991"
  };
  
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


const fb = firebase.initializeApp(app);

export const db = fb.firestore();