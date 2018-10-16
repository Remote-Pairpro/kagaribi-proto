import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import About from "../About/About";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import SignUpPage from "../SignUp/SignUp";

export const Root = () => (
    <BrowserRouter>
        <div>
            <Navigation />
            <hr />

            <Route exact path={routes.HOME} component={Home} />
            <Route path={routes.ABOUT} component={About} />
            <Route path={routes.SIGN_UP} component={SignUpPage} />
        </div>
    </BrowserRouter>
);

export default Root;
