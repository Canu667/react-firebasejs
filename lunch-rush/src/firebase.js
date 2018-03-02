import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyD1erQjPA8rii5gP91qDR7wJDoar8gwRD0',
    apiKey: 'AIzaSyD1erQjPA8rii5gP91qDR7wJDoar8gwRD0',
    authDomain: 'lunch-20db1.firebaseapp.com',
    databaseURL: 'https://lunch-20db1.firebaseio.com',
    projectId: 'lunch-20db1',
    storageBucket: 'lunch-20db1.appspot.com',
    messagingSenderId: '777357183432'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
