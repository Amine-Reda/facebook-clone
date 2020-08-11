import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaUYBXUWMQMZMjsnwoYi_514k6qfkToe0",
  authDomain: "facebook-clone-65185.firebaseapp.com",
  databaseURL: "https://facebook-clone-65185.firebaseio.com",
  projectId: "facebook-clone-65185",
  storageBucket: "facebook-clone-65185.appspot.com",
  messagingSenderId: "608595289465",
  appId: "1:608595289465:web:7eea52ae774837d26e3ba8",
  measurementId: "G-FQFQCVFDBF"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref("users");
export const postRef = firebaseApp.database().ref("posts");
