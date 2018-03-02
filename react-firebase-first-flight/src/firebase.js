import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyDqijYS_bp6Z--zaeo-VUVpjNQiMbFTM74',
    authDomain: 'reactjs-firebase-c7f67.firebaseapp.com',
    databaseURL: 'https://reactjs-firebase-c7f67.firebaseio.com',
    projectId: 'reactjs-firebase-c7f67',
    storageBucket: 'reactjs-firebase-c7f67.appspot.com',
    messagingSenderId: '1079609050103'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();