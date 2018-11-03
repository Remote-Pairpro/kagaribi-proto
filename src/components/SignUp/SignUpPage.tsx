import React from "react";
import { withRouter } from "react-router-dom";
import SignUpForm, { ISignUpFormProps } from "./SignUpForm";

const SignUpPage = (signUpFormProps: ISignUpFormProps) => {
    return (
        <div>
            <h1>SignUp</h1>
            <SignUpForm history={signUpFormProps.history} />
        </div>
    );
};

export default withRouter(SignUpPage);
