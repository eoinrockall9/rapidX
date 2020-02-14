import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyDyS2L_MG0sR-0sH3eo-urcnNk1m8Iwvzw",
  authDomain: "finalyearproject-er.firebaseapp.com",
  databaseURL: "https://finalyearproject-er.firebaseio.com",
  projectId: "finalyearproject-er",
  storageBucket: "finalyearproject-er.appspot.com",
  messagingSenderId: "918031826647",
};

let app = Firebase.initializeApp(config);
export const db = app.database();