import * as firebase from 'firebase';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC9W3UqNaLwC32uAGzNiNPnscyihd8nS50",
    authDomain: "clone-instagram-4650a.firebaseapp.com",
    databaseURL: "https://clone-instagram-4650a.firebaseio.com",
    projectId: "clone-instagram-4650a",
    storageBucket: "clone-instagram-4650a.appspot.com",
    messagingSenderId: "855759223014"
  };
  firebase.initializeApp(config);

  export const auntenticacion = firebase.auth()
  export const baseDatos = firebase.database()