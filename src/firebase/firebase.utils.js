import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// adding config creds
const config = {
    apiKey: "AIzaSyDzH06u9IR0RzEWqtzBYN2DgRHWjJaU8RE",
    authDomain: "crown-db-f2689.firebaseapp.com",
    databaseURL: "https://crown-db-f2689.firebaseio.com",
    projectId: "crown-db-f2689",
    storageBucket: "crown-db-f2689.appspot.com",
    messagingSenderId: "320935402777",
    appId: "1:320935402777:web:b97111b96dc0b9d29a3988",
    measurementId: "G-BK7BLVRFFH"
  };

  export const createUSerProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    // console.log(snapShot);

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch(error) {
        console.log("Error while creating user",error.message);
      }

    }
    // console.log(userRef)
    return userRef;


  }

// init firebase app with creds
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting google auth
const provider = new firebase.auth.GoogleAuthProvider();
// google sigin popup
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

