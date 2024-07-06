import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyAsPKgQ41urkZVWvalG3eCQpaBBarxrnNg",
    authDomain: "restro-60e95.firebaseapp.com",
    projectId: "restro-60e95",
    storageBucket: "restro-60e95.appspot.com",
    messagingSenderId: "837036587060",
    appId: "1:837036587060:web:c5283be76309ae2dbcb261",
    measurementId: "G-2VNQ3ZQNN0"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database =getDatabase(app);

  export {auth, database};