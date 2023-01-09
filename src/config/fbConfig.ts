import { initializeApp } from 'firebase/app';
import { getFirestore } from 'redux-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCFezZmNxpDbidtGvuQHyQbsI_enGY-_V0',
  authDomain: 'notes-47.firebaseapp.com',
  projectId: 'notes-47',
  storageBucket: 'notes-47.appspot.com',
  messagingSenderId: '234885507567',
  appId: '1:234885507567:web:6494567556779639d96e1a',
  measurementId: 'G-P86V3VNGEZ',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
