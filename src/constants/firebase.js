import firebase from "firebase";

export const config = {
  apiKey: "AIzaSyAEWheVLiNPZBb8jXcA4mQibuReEZjy6SY",
  authDomain: "ereka-chat.firebaseapp.com",
  databaseURL: "https://ereka-chat.firebaseio.com",
  projectId: "ereka-chat",
  storageBucket: "ereka-chat.appspot.com",
  messagingSenderId: "441086524948"
};

firebase.initializeApp(config);
