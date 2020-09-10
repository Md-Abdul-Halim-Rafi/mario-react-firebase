import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "your_apiKey",
  authDomain: "your_authDomain",
  databaseURL: "your_databaseURL",
  projectId: "your_projectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId",
  appId: "your_appId",
  measurementId: "your_measurementId",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
