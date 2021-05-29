import firebase from 'firebase';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDi7pTCGLN9jda-diRLmG0OW1gUgi5S_PA",
    authDomain: "wireless-buzzer-98556.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-98556-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-98556",
    storageBucket: "wireless-buzzer-98556.appspot.com",
    messagingSenderId: "675660421382",
    appId: "1:675660421382:web:72e3247a99730180da2687",
    measurementId: "G-KBQNDHX74Q"
  };

  // Initialize Firebase
let app = firebase.initializeApp(firebaseConfig)

export default app.database()