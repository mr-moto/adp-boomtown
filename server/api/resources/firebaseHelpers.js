import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAXRwd0CaiqnbUwBaJucKBxevRrS_uTjD0",
    authDomain: "boomtown-5ddf0.firebaseapp.com",
    databaseURL: "https://boomtown-5ddf0.firebaseio.com",
    projectId: "boomtown-5ddf0",
    storageBucket: "boomtown-5ddf0.appspot.com",
    messagingSenderId: "1079271318974"
};
firebase.initializeApp(config);
const firebaseDB = firebase.database();

export const getUser = () => {
    return new Promise((resolve, reject) => {
        firebaseDB
            .ref(`/users/${id}`)
            .once("value")
            .then(snapshot => {
                resolve({
                    ...snapshot.val(),
                    id
                });
            })
            .catch(error => console.log(error));
    });
};
