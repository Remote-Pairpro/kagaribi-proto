import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import { auth } from "../../firebase/firebase";
import About from "../About/About";
import Home from "../Home/Home";
import MyPage from "../MyPage/MyPage";
import SignInPage from "../SignIn/SignInPage";
import SignUpPage from "../SignUp/SignUpPage";
import TopAppBar from "../TopAppBar/TopAppBar";

interface IRootState {
    authUser: firebase.User;
}

export class Root extends React.Component<{}, IRootState> {
    constructor(defaultProp: any) {
        super(defaultProp);
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
                    <TopAppBar authUser={this.state.authUser} />

                    <Route exact path={routes.HOME} component={Home} />
                    <Route path={routes.ABOUT} component={About} />
                    <Route path={routes.SIGN_UP} component={SignUpPage} />
                    <Route path={routes.SIGN_IN} component={SignInPage} />
                    <Route
                        path={routes.MY_PAGE}
                        render={() => <MyPage authUser={this.state.authUser} />}
                    />
                </div>
            </BrowserRouter>
        );
    }
}
