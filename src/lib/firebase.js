import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBEh6qzKnJ2vBbszj5Q4QPuYg0_DkuLk8Q",
  authDomain: "outstapound.firebaseapp.com",
  projectId: "outstapound",
  storageBucket: "outstapound.appspot.com",
  messagingSenderId: "288334123887",
  appId: "1:288334123887:web:3e3e4b87cd160c04234e9a",
  measurementId: "G-HT5DLM16FK"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
