import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
  apiKey: "AIzaSyA8PI1ATjygDZV8_tacLmzgk31omRo4KGk",
   authDomain: "magnalardo-fav3d.firebaseapp.com",
   projectId: "magnalardo-fav3d",
   storageBucket: "magnalardo-fav3d.appspot.com",
   messagingSenderId: "976069732889",
   appId: "1:976069732889:web:4ad9f40e88bc6931e81888"
 });

 export function getFirebase() {
   return app
 }

 export function getFirestore() {
   return firebase.firestore(app)
 }
