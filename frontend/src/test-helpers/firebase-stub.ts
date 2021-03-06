const firebaseUserMetadataDummy: firebase.auth.UserMetadata = {
    creationTime: "dummy",
    lastSignInTime: "dummy",
};

const firebaseUserDummy: firebase.User = {
    delete: () => new Promise(() => "dummy"),
    emailVerified: false,
    getIdTokenResult: () => new Promise(() => "dummy"),
    getIdToken: () => new Promise(() => "dummy"),
    isAnonymous: false,
    linkAndRetrieveDataWithCredential: () => new Promise(() => "dummy"),
    linkWithCredential: () => new Promise(() => "dummy"),
    linkWithPhoneNumber: () => new Promise(() => "dummy"),
    linkWithPopup: () => new Promise(() => "dummy"),
    linkWithRedirect: () => new Promise(() => "dummy"),
    metadata: firebaseUserMetadataDummy,
    phoneNumber: "dummy",
    providerData: [],
    reauthenticateAndRetrieveDataWithCredential: () =>
        new Promise(() => "dummy"),
    reauthenticateWithCredential: () => new Promise(() => "dummy"),
    reauthenticateWithPhoneNumber: () => new Promise(() => "dummy"),
    reauthenticateWithPopup: () => new Promise(() => "dummy"),
    reauthenticateWithRedirect: () => new Promise(() => "dummy"),
    refreshToken: "dummy",
    reload: () => new Promise(() => "dummy"),
    sendEmailVerification: () => new Promise(() => "dummy"),
    toJSON: () => "dummy",
    unlink: () => new Promise(() => "dummy"),
    updateEmail: () => new Promise(() => "dummy"),
    updatePassword: () => new Promise(() => "dummy"),
    updatePhoneNumber: () => new Promise(() => "dummy"),
    updateProfile: () => new Promise(() => "dummy"),
    displayName: null,
    email: "example@example.com",
    photoURL: "dummy",
    providerId: "dummy",
    uid: "this_is_example",
};

export { firebaseUserDummy };
