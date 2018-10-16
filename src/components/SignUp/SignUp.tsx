import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import * as auth from "../../firebase/auth";

interface ISignUpFormProps {
    history: any;
}
interface ISignUpFormState {
    username: string;
    email: string;
    passwordOne: string;
    passwordTwo: string;
    error: any;
}

const INITIAL_STATE: {
    username: string;
    email: string;
    passwordOne: string;
    passwordTwo: string;
    error: any;
} = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
};

class SignUpForm extends React.Component<ISignUpFormProps, ISignUpFormState> {
    constructor(signUpFormProps: ISignUpFormProps) {
        super(signUpFormProps);
        this.state = { ...INITIAL_STATE };
    }

    public onSubmit = (event: any) => {
        const signUpFormState: ISignUpFormState = this.state;
        const signUpFormProps: ISignUpFormProps = this.props;

        console.log(event);
        console.log(signUpFormState);
        console.log(signUpFormProps);

        auth.signUpWithEamilAndPassword(
            signUpFormState.email,
            signUpFormState.passwordOne
        )
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                signUpFormProps.history.push(routes.HOME);
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
                    autoComplete="on"
                />
                <input
                    value={states.email}
                    onChange={event =>
                        this.setState({ email: event.target.value })
                    }
                    type="text"
                    placeholder="Email Address"
                    autoComplete="on"
                />
                <input
                    value={states.passwordOne}
                    onChange={event =>
                        this.setState({ passwordOne: event.target.value })
                    }
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                />
                <input
                    value={states.passwordTwo}
                    onChange={event =>
                        this.setState({ passwordTwo: event.target.value })
                    }
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="on"
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

const SignUpPage = (signUpFormProps: ISignUpFormProps) => {
    return (
        <div>
            <h1>SignUp</h1>
            <SignUpForm history={signUpFormProps.history} />
        </div>
    );
};

export default withRouter(SignUpPage);
export { SignUpForm, SignUpLink };
