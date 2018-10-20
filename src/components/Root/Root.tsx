import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase/firebase";
import About from "../About/About";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import SignInPage from "../SignIn/SignIn";
import SignUpPage from "../SignUp/SignUp";

interface IRootState {
    authUser: firebase.User;
}

export class Root extends React.Component<{}, IRootState> {
    constructor({}) {
        super({});
        this.state = { authUser: null };
    }

    public componentDidMount() {
        auth.onAuthStateChanged(user => {
            user
                ? this.setState({ authUser: user })
                : this.setState({ authUser: null });
        });
    }

    public render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation authUser={this.state.authUser} />
                    <hr />

                    <Route exact path={routes.HOME} component={Home} />
                    <Route path={routes.ABOUT} component={About} />
                    <Route path={routes.SIGN_UP} component={SignUpPage} />
                    <Route path={routes.SIGN_IN} component={SignInPage} />
                </div>
            </BrowserRouter>
        );
    }
}
