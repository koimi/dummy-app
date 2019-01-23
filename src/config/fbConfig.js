import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWZXr_5qiGe1tVL3Ssf3FqnwlvIvIM4_U",
  authDomain: "dummy-app-59bf5.firebaseapp.com",
  databaseURL: "https://dummy-app-59bf5.firebaseio.com",
  projectId: "dummy-app-59bf5",
  storageBucket: "dummy-app-59bf5.appspot.com",
  messagingSenderId: "42952393941"
};

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase


