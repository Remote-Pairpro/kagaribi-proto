import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import * as auth from "../../firebase/auth";

interface ISignUpFormState {
    username: string;
    email: string;
    passwordOne: string;
    passwordTwo: string;
    error: any;
}

// const byPropKey = (propertyName: string, value: any) => ({
//     [propertyName]: value,
// });

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
        const states: ISignUpFormState = this.state;
        auth.signUpWithEamilAndPassword(states.email, states.passwordOne)
            .then(authUser => {
                this.setState({
                    username: "",
                    email: "",
                    passwordOne: "",
                    passwordTwo: "",
                    error: null,
                });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    public render() {
        const states: ISignUpFormState = this.state;
        const isInvalid: boolean =
            states.passwordOne !== states.passwordTwo ||
            states.passwordOne === "" ||
            states.email === "" ||
            states.username === "";
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={states.username}
                    onChange={event =>
                        this.setState({ username: event.target.value })
                    }
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={states.email}
                    onChange={event =>
                        this.setState({ email: event.target.value })
                    }
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={states.passwordOne}
                    onChange={event =>
                        this.setState({ passwordOne: event.target.value })
                    }
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={states.passwordTwo}
                    onChange={event =>
                        this.setState({ passwordTwo: event.target.value })
                    }
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit" disabled={isInvalid}>
                    Sign Up
                </button>
                {states.error && <p>{states.error.message}</p>}
            </form>
        );
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
