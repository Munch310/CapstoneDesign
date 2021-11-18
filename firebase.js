// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBZoLPfZvbuVTiw8TlrHHon7PZLt873nw",
  authDomain: "fir-auth-8f2be.firebaseapp.com",
  projectId: "fir-auth-8f2be",
  storageBucket: "fir-auth-8f2be.appspot.com",
  messagingSenderId: "177992551903",
  appId: "1:177992551903:web:8abca26905dff43203886a"
};

// Initialize Firebase
let app;
if (firebase.apps.length ===0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};
