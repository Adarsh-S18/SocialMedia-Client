
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDCHXlOucEvD0JfF6UtMjwiMOoLFbaui_A",
    authDomain: "olx-clone-66c02.firebaseapp.com",
    projectId: "olx-clone-66c02",
    storageBucket: "olx-clone-66c02.appspot.com",
    messagingSenderId: "486399761308",
    appId: "1:486399761308:web:057f0c3c61fff8bc74c659",
    measurementId: "G-CDMVRMD4PG"
  };

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage;