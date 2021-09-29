import firebase from 'firebase' //react-firebase-hooks  npm i firebase@^8.10.0 newer version may not work

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_DGpRvYrJ-wS-PxAy_8AGJVhN_olAVOc",
    authDomain: "python-team-official.firebaseapp.com",
    projectId: "python-team-official",
    storageBucket: "python-team-official.appspot.com",
    messagingSenderId: "226154642231",
    appId: "1:226154642231:web:114a5ee47d88e1c431b8b2",
    measurementId: "G-2DRJYVGV6M"
})

const db = firebaseApp.firestore()

const auth = firebase.auth

export {db , auth}

//https://console.firebase.google.com/project/python-team-official/firestore/data/~2Fmessages~2FsGp2mTtrLGYggWjTqc7Q