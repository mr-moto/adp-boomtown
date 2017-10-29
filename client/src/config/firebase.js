import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAXRwd0CaiqnbUwBaJucKBxevRrS_uTjD0",
    authDomain: "boomtown-5ddf0.firebaseapp.com",
    databaseURL: "https://boomtown-5ddf0.firebaseio.com",
    projectId: "boomtown-5ddf0",
    storageBucket: "boomtown-5ddf0.appspot.com",
    messagingSenderId: "1079271318974"
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
const firebaseStorage = firebase.storage(firebaseApp);
const firebaseDB = firebase.database();

export { config, firebaseApp, firebaseAuth, firebaseStorage, firebaseDB };
