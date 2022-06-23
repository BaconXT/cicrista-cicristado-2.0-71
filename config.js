import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAOtCxdmb-oE9s3iEw-3368nJivfmc0mWA",
  authDomain: "cicrista71.firebaseapp.com",
  projectId: "cicrista71",
  storageBucket: "cicrista71.appspot.com",
  messagingSenderId: "170056501624",
  appId: "1:170056501624:web:905e5894817f8be8f0608d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
