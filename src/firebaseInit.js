// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkAwu2BfS5M7K7WocmOE7HxWg68jlFfs",
  authDomain: "aqarat-5f021.firebaseapp.com",
  projectId: "aqarat-5f021",
  storageBucket: "aqarat-5f021.appspot.com",
  messagingSenderId: "548052095349",
  appId: "1:548052095349:web:2ca7d6ad2101ebf8fc433c",
  measurementId: "G-370918BFR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
