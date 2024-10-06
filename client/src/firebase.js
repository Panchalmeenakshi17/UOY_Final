// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCrsbARBvoDDi1o4AmPVv_3Iu5I1qi4BQw",
//   authDomain: "unity-of-youth.firebaseapp.com",
//   projectId: "unity-of-youth",
//   storageBucket: "unity-of-youth.appspot.com",
//   messagingSenderId: "594050608974",
//   appId: "1:594050608974:web:19b78677c182a1d684781f",
//   measurementId: "G-T496JJ5HE1"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBYgSvfd37aem3qRVQSgoruzQAjwu_7Hik",
//   authDomain: "unity-of-youth-foundation.firebaseapp.com",
//   projectId: "unity-of-youth-foundation",
//   storageBucket: "unity-of-youth-foundation.appspot.com",
//   messagingSenderId: "770621220210",
//   appId: "1:770621220210:web:e5d7c4f55d003c4f5829eb",
//   measurementId: "G-G3B75XEQ1P"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAuz4iaaajOtyDdzRrIPv8Ub1sJ6AsUufw",
  authDomain: "unity-of-youth-foundatio-f3934.firebaseapp.com",
  projectId: "unity-of-youth-foundatio-f3934",
  storageBucket: "unity-of-youth-foundatio-f3934.appspot.com",
  messagingSenderId: "517633997681",
  appId: "1:517633997681:web:b4bfcdee79306749d194d0",
  measurementId: "G-KEEX3S1Q3H"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };