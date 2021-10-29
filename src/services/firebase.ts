import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyCLyZG9-_l1pDGJUZhAGF7dK5ygN5w0c3M",
   authDomain: "letmeask-2c222.firebaseapp.com",
   databaseURL: "https://letmeask-2c222-default-rtdb.firebaseio.com",
   projectId: "letmeask-2c222",
   storageBucket: "letmeask-2c222.appspot.com",
   messagingSenderId: "355270853660",
   appId: "1:355270853660:web:3c2e803c7b89825e4b0bd9",
   measurementId: "G-EY0K2TE0MV",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export { auth, database, firebase, googleAuthProvider };
