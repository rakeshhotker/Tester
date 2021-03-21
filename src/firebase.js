import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDwnW9mq_dUVjst2RFxE7i8sP390qT_b9I",
    authDomain: "gamingapp-e9001.firebaseapp.com",
    projectId: "gamingapp-e9001",
    storageBucket: "gamingapp-e9001.appspot.com",
    messagingSenderId: "301311541328",
    appId: "1:301311541328:web:a954e1f9dd4e9fd9295155"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth };
  