// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkV5rItKfliR0JYqZZsOSBgfzRon5l_Ok",
  authDomain: "facebook2-0-382db.firebaseapp.com",
  projectId: "facebook2-0-382db",
  storageBucket: "facebook2-0-382db.appspot.com",
  messagingSenderId: "973703732488",
  appId: "1:973703732488:web:f2856976dd018336dbe0bd",
  measurementId: "G-1DGR63WSM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);