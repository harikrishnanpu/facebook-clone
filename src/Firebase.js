import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAeVu_bK9WXjyZGnbXJvSIjMzLXzd-3haA",
  authDomain: "facebook-clone-9fc7d.firebaseapp.com",
  projectId: "facebook-clone-9fc7d",
  storageBucket: "facebook-clone-9fc7d.appspot.com",
  messagingSenderId: "169179048541",
  appId: "1:169179048541:web:8adabceee98f693e163bb4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export { auth , provider  } ;
  export default db;