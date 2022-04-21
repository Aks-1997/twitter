import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "twitter-501d3.firebaseapp.com",
  databaseURL: "https://twitter-501d3-default-rtdb.firebaseio.com",
  projectId: "twitter-501d3",
  storageBucket: "twitter-501d3.appspot.com",
  messagingSenderId: "476092438228",
  appId: "1:476092438228:web:39fabf60409ffc6d600d41"
};

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
export const db = getDatabase(firebaseApp);
