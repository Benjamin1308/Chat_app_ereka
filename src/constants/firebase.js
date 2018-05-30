import firebase from 'firebase';

require('firebase/firestore');

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAEWheVLiNPZBb8jXcA4mQibuReEZjy6SY',
  authDomain: 'ereka-chat.firebaseapp.com',
  databaseURL: 'https://ereka-chat.firebaseio.com',
  projectId: 'ereka-chat',
  storageBucket: 'ereka-chat.appspot.com',
  messagingSenderId: '441086524948',
};
firebase.initializeApp(FIREBASE_CONFIG);
export const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
