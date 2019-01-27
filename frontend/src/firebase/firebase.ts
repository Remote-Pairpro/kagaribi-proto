import firebase from "firebase/app";
import "firebase/auth";

const firebaseApiKey = process.env.FIREBASE_API_KEY;
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;

const config = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
