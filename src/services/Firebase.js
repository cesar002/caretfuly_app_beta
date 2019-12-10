import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCcoxnM81f9ixHCZzrZHSpBMuS97JTO7b0",
    authDomain: "cartfuly.firebaseapp.com",
    databaseURL: "https://cartfuly.firebaseio.com",
    projectId: "cartfuly",
    storageBucket: "cartfuly.appspot.com",
    messagingSenderId: "634969038665",
    appId: "1:634969038665:web:fd8068c22b5802e796c498",
    measurementId: "G-C550D26K7Q"
};

firebase.initializeApp(firebaseConfig)

export default firebase