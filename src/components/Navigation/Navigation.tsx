import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import SignOutButton from "../SignOut/SignOutButton";

interface INavigationProp {
    authUser: firebase.User;
}

class Navigation extends React.Component<INavigationProp> {
    constructor(navigationProp: INavigationProp) {
        super(navigationProp);
    }

    public render() {
        const user = this.props.authUser;
        return user ? <NavigationAuth /> : <NavigationNonAuth />;
    }
}

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
            <Link to={routes.ABOUT}>About</Link>
        </li>
        <li>
            <Link to={routes.MY_PAGE}>My Page</Link>
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
            <Link to={routes.ABOUT}>About</Link>
        </li>
        <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;
