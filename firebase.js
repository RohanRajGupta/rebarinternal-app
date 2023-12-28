import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {

    apiKey: "AIzaSyA1ASPRrUq0gTee9NAPYvLKniw80WetFTU",
    authDomain: "rebar-app.firebaseapp.com",
    projectId: "rebar-app",
    storageBucket: "rebar-app.appspot.com",
    messagingSenderId: "84503451830",
    appId: "1:84503451830:web:a2ed4c54c9211286f76e17"

};
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()


// const uploadToFirebase = async (uri, name) => {
//     const fetchResponse = await fetch(uri)
//     const theBlob = await fetchResponse.blob()
//     console.log('blob', theBlob)

// }

export { auth, firebase };
