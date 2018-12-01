import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import * as routes from "../../constants/routes";
import * as auth from "../../firebase/auth";

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

        this.onSubmit = this.onSubmit.bind(this);
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
                <TextField
                    id="email-address"
                    label="Email"
                    type="text"
                    placeholder="Email Address"
                    value={states.email}
                    onChange={event =>
                        this.setState({ email: event.target.value })
                    }
                    autoComplete="on"
                />
                {"  "}
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Passwprd"
                    value={states.password}
                    onChange={event =>
                        this.setState({ password: event.target.value })
                    }
                    autoComplete="on"
                />
                <Button type="submit" disabled={isInvalid} variant="outlined">
                    Sign In
                </Button>
                {states.error && <p>{states.error.message}</p>}
            </form>
        );
    }
}

export default SignInFrom;
export { ISignInFormProps };
