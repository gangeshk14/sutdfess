import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGAI2yUtjX4mFcJD0QyaRKSa0X-MkIRA0",
  authDomain: "cookery-site.firebaseapp.com",
  projectId: "cookery-site",
  storageBucket: "cookery-site.appspot.com",
  messagingSenderId: "7135932334",
  appId: "1:7135932334:web:0c4883ac552f35edcf623f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  //init services
const db = getFirestore(app);

export {db}