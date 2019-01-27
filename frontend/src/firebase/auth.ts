import { auth } from "./firebase";

/**
 * サインアップを行う。
 * @param email string
 * @param password string
 */
export const signUpWithEamilAndPassword = (
    email: string,
    password: string
): Promise<firebase.auth.UserCredential> => {
    return auth.createUserWithEmailAndPassword(email, password);
};

/**
 * サインインを行う。
 * @param email string
 * @param password string
 */
export const signInWithEmailAndPassword = (
    email: string,
    password: string
): Promise<firebase.auth.UserCredential> => {
    return auth.signInWithEmailAndPassword(email, password);
};

/**
 * サインアウトを行う。
 */
export const signOut = () => {
    auth.signOut();
};
