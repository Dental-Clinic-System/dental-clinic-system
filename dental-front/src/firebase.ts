import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// import { useEffect, useState } from 'react'

const Config = {
    apiKey: "AIzaSyBEj_wmbY_4BMgs08X9Aw9sGB8ItYGAnX0",
    authDomain: "dental-clinic-1b3f5.firebaseapp.com",
    projectId: "dental-clinic-1b3f5",
    storageBucket: "dental-clinic-1b3f5.appspot.com",
    messagingSenderId: "820444976915",
    appId: "1:820444976915:web:d8e458f9ec737b82b76ce6",
    measurementId: "G-190XMYGE6W"
  };
// export const useFirebase = () => {
//     let [state,setState] = useState({ firebase });
//     useEffect(() => {
//         let app;
//         if(!firebase.apps.length) {
//             app = firebase.initializeApp(Config);
//             const analytics = getAnalytics(app);    
//         }
//         let auth = firebase.auth(app);
//         let firestore = firebase.firestore(app);
//         let rtdb = firebase.database;
//         let storage = firebase.storage;
//         setState({ firebase, app, auth, firestore, rtdb, storage});
//     },[Config])
//     return state;
// }
const app = firebase.initializeApp(Config);
const analytics = getAnalytics(app);   