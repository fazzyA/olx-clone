import  firebase  from 'firebase';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCnNFU2M-TfaGzQhC-ZgOXLX3POu5Ykues",
    authDomain: "olx-clone-pk.firebaseapp.com",
    databaseURL: "https://olx-clone-pk.firebaseio.com",
    projectId: "olx-clone-pk",
    storageBucket: "olx-clone-pk.appspot.com",
    messagingSenderId: "578377207503",
    appId: "1:578377207503:web:0e9cf23854dbe3489331ba",
    measurementId: "G-V2GTMXJXL8"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);