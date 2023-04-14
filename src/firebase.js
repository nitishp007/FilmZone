import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA116M5iUXN2xEnRrur6Jlfv-dVRVm8q34",
  authDomain: "setflix-253df.firebaseapp.com",
  projectId: "setflix-253df",
  storageBucket: "setflix-253df.appspot.com",
  messagingSenderId: "548304539456",
  appId: "1:548304539456:web:8fa03086544a3ec1c374a5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();//real time database ehich keep track of user subscription
const auth = firebase.auth();

export { auth };
export default db;