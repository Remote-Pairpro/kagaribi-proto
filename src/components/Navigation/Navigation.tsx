import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

class Navigation extends React.Component<{}> {
    constructor(navigationProps: any) {
        super(navigationProps);
    }

    public render() {
        return (
            <ul>
                <li>
                    <Link to={routes.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={routes.ABOUT}>About</Link>
                </li>
            </ul>
        );
    }
}

export default Navigation;
