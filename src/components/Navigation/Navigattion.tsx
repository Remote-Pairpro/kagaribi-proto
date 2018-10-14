import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

const Navigation = () => (
    <div>
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
    </div>
);

export default Navigation;
