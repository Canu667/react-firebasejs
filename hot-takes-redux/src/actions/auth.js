import {auth, database, googleAuthProvider} from '../firebase';
import {addUser} from './users';
import pick from 'lodash/pick';

const usersRef = database.ref('users');

export const signIn = () => {
    return (dispatch) => {
        dispatch({type: 'ATTEMPTING_LOGIN'});
        auth.signInWithPopup(googleAuthProvider);
    }
};

export const signOut = () => {
    return (dispatch) => {
        auth.signOut();
    }
};

const signedIn = (user) => {
    return {
        type: 'SIGN_IN',
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
    };
};

const signedOut = (user) => {
    return {
        type: 'SIGN_OUT',
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
    };
};

export const startListeningToAuthChanges = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signedIn(user));
               usersRef.child(user.uid).set(pick(user, ['displayName', 'uid', 'photoURL', 'email']));
            } else {
                dispatch(signedOut());
            }
        });
    }
};

export const startListeningForUsers = () => {
    return (dispatch) => {

    };
};