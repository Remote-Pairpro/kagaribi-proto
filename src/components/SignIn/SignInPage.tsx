import React from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../SignUp/SignUp";
import SignInForm, { ISignInFormProps } from "./SignInForm";

const SignInPage = (signInFormProps: ISignInFormProps) => {
    return (
        <div>
            <h1>SignIn</h1>
            <SignInForm history={signInFormProps.history} />
            <SignUpLink />
        </div>
    );
};

export default withRouter(SignInPage);
