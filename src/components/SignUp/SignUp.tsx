import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

interface ISignUpFormState {
    username: string;
    email: string;
    passwordOne: string;
    passwordTwo: string;
    error: any;
}

class SignUpForm extends React.Component<{}, ISignUpFormState> {
    constructor({}) {
        super({});
        this.state = {
            username: "",
            email: "",
            passwordOne: "",
            passwordTwo: "",
            error: null,
        };
    }

    public onSubmit = (event: any) => {
        event.preventDefault();
    };

    public render() {
        return <form onSubmit={this.onSubmit} />;
    }
}

const SignUpLink = () => {
    return (
        <p>
            アカウントをお持ちでないですか？{" "}
            <Link to={routes.SIGN_UP}>Sign Up</Link>
        </p>
    );
};

const SignUpPage = () => {
    return (
        <div>
            <h1>SignUp</h1>
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
export { SignUpForm, SignUpLink };
