import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import * as auth from "../../firebase/auth";
import { SignUpLink } from "../SignUp/SignUp";

interface ISignInFormState {
    email: string;
    password: string;
    error: any;
}

interface ISignInFormProps {
    history: any;
}

const INITIAL_STATE: ISignInFormState = {
    email: "",
    password: "",
    error: null,
};

class SignInFrom extends React.Component<ISignInFormProps, ISignInFormState> {
    constructor(signInFormProps: ISignInFormProps) {
        super(signInFormProps);
        this.state = { ...INITIAL_STATE };
    }

    public onSubmit = (event: any): void => {
        const states: ISignInFormState = this.state;
        const history: any = this.props.history;

        auth.signInWithEmailAndPassword(states.email, states.password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    public render() {
        const states = this.state;
        const isInvalid: boolean =
            states.email === "" || states.password === "";
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Email Address"
                    value={states.email}
                    onChange={event =>
                        this.setState({ email: event.target.value })
                    }
                    autoComplete="on"
                />
                <input
                    type="password"
                    placeholder="Passwprd"
                    value={states.password}
                    onChange={event =>
                        this.setState({ password: event.target.value })
                    }
                    autoComplete="on"
                />
                <button type="submit" disabled={isInvalid}>
                    Sign In
                </button>
                {states.error && <p>{states.error.message}</p>}
            </form>
        );
    }
}

const SignInPage = (signInFormProps: ISignInFormProps) => {
    return (
        <div>
            <h1>SignIn</h1>
            <SignInFrom history={signInFormProps.history} />
            <SignUpLink />
        </div>
    );
};

export default withRouter(SignInPage);
export { SignInFrom };
