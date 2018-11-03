import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
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

const INITIAL_STATE: ISignUpFormState = {
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

    public onSubmit = (event: any): void => {
        const signUpFormState: ISignUpFormState = this.state;
        const signUpFormProps: ISignUpFormProps = this.props;

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
                <TextField
                    id="Full Name"
                    label="Full Name"
                    type="text"
                    value={states.username}
                    onChange={event =>
                        this.setState({ username: event.target.value })
                    }
                    placeholder="Full Name"
                    autoComplete="on"
                />
                {"  "}
                <TextField
                    id="email-address"
                    label="Email"
                    type="text"
                    value={states.email}
                    onChange={event =>
                        this.setState({ email: event.target.value })
                    }
                    placeholder="Email Address"
                    autoComplete="on"
                />
                {"  "}
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={states.passwordOne}
                    onChange={event =>
                        this.setState({ passwordOne: event.target.value })
                    }
                    placeholder="Password"
                    autoComplete="on"
                />
                {"  "}
                <TextField
                    id="password-two"
                    label="Confirm Password"
                    type="password"
                    value={states.passwordTwo}
                    onChange={event =>
                        this.setState({ passwordTwo: event.target.value })
                    }
                    placeholder="Confirm Password"
                    autoComplete="on"
                />
                <Button type="submit" disabled={isInvalid} variant="outlined">
                    Sign Up
                </Button>
                {states.error && <p>{states.error.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;
export { ISignUpFormProps };
