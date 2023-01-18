import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGXjltWLrUTnH5QUaAmsQ1gTo9O5LIHMo",
  authDomain: "sutd-confessions.firebaseapp.com",
  projectId: "sutd-confessions",
  storageBucket: "sutd-confessions.appspot.com",
  messagingSenderId: "71923380135",
  appId: "1:71923380135:web:d08ea1cbcb16ac1adcd082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  //init services
const db = getFirestore(app);

export {db}