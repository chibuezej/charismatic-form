// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJO2oVDWR6ATZsv732QNtmeglup5cae4",
  authDomain: "ccrn-e6a10.firebaseapp.com",
  projectId: "ccrn-e6a10",
  storageBucket: "ccrn-e6a10.appspot.com",
  messagingSenderId: "1090286666015",
  appId: "1:1090286666015:web:17190758e61535694b702a",
  measurementId: "G-0R80VBTJCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };