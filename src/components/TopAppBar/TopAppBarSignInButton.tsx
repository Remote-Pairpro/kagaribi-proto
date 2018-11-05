import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

// See https://material-ui.com/demos/buttons/#third-party-routing-library
const SignInLink = (prop: any) => <Link to={routes.SIGN_IN} {...prop} />;

class TopAppBarSignInButton extends React.Component<{}> {
    constructor(topAppBarSignInButtonProps: any) {
        super(topAppBarSignInButtonProps);
    }

    public render() {
        return (
            <div>
                <Button color="inherit" component={SignInLink}>
                    SIGN IN
                </Button>
            </div>
        );
    }
}

export default TopAppBarSignInButton;
