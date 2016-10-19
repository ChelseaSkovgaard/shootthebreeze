import firebase from 'firebase';

const config = {
     apiKey: "AIzaSyAyMxECFdvtieBNUgr48A8U7cLzgnbVfy4",
     authDomain: "shootthebreeze-d14af.firebaseapp.com",
     databaseURL: "https://shootthebreeze-d14af.firebaseio.com",
     storageBucket: "shootthebreeze-d14af.appspot.com",
     messagingSenderId: "397168728410"
   };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
