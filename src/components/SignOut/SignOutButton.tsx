import React from "react";
import * as auth from "../../firebase/auth";

const SignoutButton = () => (
    <button type="button" onClick={auth.signOut}>
        Sign Out
    </button>
);

export default SignoutButton;
