// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8bXqrDXZmhtFjzkfESNlIZLEoGReT72Q",
    authDomain: "genius-car-services-7313a.firebaseapp.com",
    projectId: "genius-car-services-7313a",
    storageBucket: "genius-car-services-7313a.appspot.com",
    messagingSenderId: "32753064059",
    appId: "1:32753064059:web:68ad3e32f91cee45262ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

