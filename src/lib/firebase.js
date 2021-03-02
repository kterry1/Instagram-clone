import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyAZFCZlcrfxh4yX7qH4gUNm0X2-DyPZXXY",
    authDomain: "instagram-clone-9cd14.firebaseapp.com",
    projectId: "instagram-clone-9cd14",
    storageBucket: "instagram-clone-9cd14.appspot.com",
    messagingSenderId: "785524430136",
    appId: "1:785524430136:web:01b498b8a052afe9079dcd"
}

const firebase = window.firebase.initializeApp(config);

const {FieldValue} = window.firebase.firestore;

//seedDatabase(firebase);
export {firebase, FieldValue};