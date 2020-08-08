import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDS5lQOKHzXeV66elr1XIbwRtXT8RqCVC8',
  authDomain: 'carl-gram.firebaseapp.com',
  databaseURL: 'https://carl-gram.firebaseio.com',
  projectId: 'carl-gram',
  storageBucket: 'carl-gram.appspot.com',
  messagingSenderId: '982147093177',
  appId: '1:982147093177:web:ea9d1ed15187e9ffdbc168',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
