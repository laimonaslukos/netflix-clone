import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyDDL5J7UisljNotTAULZg4MjT7xScCs89s",
  authDomain: "new-netflix-clone-1b0f7.firebaseapp.com",
  projectId: "new-netflix-clone-1b0f7",
  storageBucket: "new-netflix-clone-1b0f7.appspot.com",
  messagingSenderId: "207892343631",
  appId: "1:207892343631:web:34eaa7cb694c678876333a"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;