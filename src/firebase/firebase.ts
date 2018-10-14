import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../.secrets/firebase.config";

const config = {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
