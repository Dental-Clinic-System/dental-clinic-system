import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react'

//firebase config used .env
const Config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

//importing firebase auth, firestore, rtdb, storage
export const useFirebase = () => {
    let [state,setState] = useState({ firebase });
    useEffect(() => {
        let app;
        if(!firebase.apps.length) {
            app = firebase.initializeApp(Config);
          }
        const analytics = getAnalytics(app);   
        let auth = firebase.auth(app);
        let firestore = firebase.firestore(app);
        let rtdb = firebase.database;
        let storage = firebase.storage;
        setState({ firebase, app, auth, firestore, rtdb, storage});
    },[Config])
    return state;
}
