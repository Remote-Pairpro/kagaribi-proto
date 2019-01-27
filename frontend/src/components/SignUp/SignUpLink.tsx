import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

const SignUpLink = () => {
    return (
        <p>
            アカウントをお持ちでないですか？{" "}
            <Link to={routes.SIGN_UP}>Sign Up</Link>
        </p>
    );
};

export default SignUpLink;
