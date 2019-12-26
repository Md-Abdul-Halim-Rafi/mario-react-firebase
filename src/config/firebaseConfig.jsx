import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVS5MdD-ZCxQ_cB8nfA3JCNM6sxqIZafc",
  authDomain: "react-mario-webapp.firebaseapp.com",
  databaseURL: "https://react-mario-webapp.firebaseio.com",
  projectId: "react-mario-webapp",
  storageBucket: "react-mario-webapp.appspot.com",
  messagingSenderId: "131948294287",
  appId: "1:131948294287:web:734e47f8fb5a4a8ff2c0fa",
  measurementId: "G-EJH6FC137N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
