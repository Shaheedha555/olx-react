import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBfXyC-sYbDJ4gvt71mObrkUdanw_BC6aY",
    authDomain: "olx-clone-42477.firebaseapp.com",
    projectId: "olx-clone-42477",
    storageBucket: "olx-clone-42477.appspot.com",
    messagingSenderId: "665271765521",
    appId: "1:665271765521:web:b5a7e398409a4ab991ffb0",
    measurementId: "G-6EBZ5J1FQ6"
  };

  export default firebase.initializeApp(firebaseConfig)