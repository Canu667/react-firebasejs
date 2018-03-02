import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBy3x-mzy0qm_455GnwBIReVDkxuMUFPOI",
    authDomain: "sprit-animal-70256.firebaseapp.com",
    databaseURL: "https://sprit-animal-70256.firebaseio.com",
    projectId: "sprit-animal-70256",
    storageBucket: "",
    messagingSenderId: "225051031842"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
