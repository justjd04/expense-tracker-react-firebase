import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBP3vq39W_n-InVUZUwoPTD3dvWO94C0Q0",
    authDomain: "jdcode1-38a90.firebaseapp.com",
    projectId: "jdcode1-38a90",
    storageBucket: "jdcode1-38a90.appspot.com",
    messagingSenderId: "637942497293",
    appId: "1:637942497293:web:75ecc6d13e5354fd69d544",
    measurementId: "G-GV2S4P3YQD"
};

const fire = firebase.initializeApp(config);
export default fire;