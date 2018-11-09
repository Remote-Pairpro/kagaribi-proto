import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import TopAppBarAccountButton from "./TopAppBarAccountButton";
import TopAppBarSignInButton from "./TopAppBarSignInButton";

interface ITopAppBarProps {
    authUser: firebase.User;
}

// See https://material-ui.com/demos/buttons/#third-party-routing-library
const LinkToHome = (prop: any) => <Link to={routes.HOME} {...prop} />;

class TopAppBar extends React.Component<ITopAppBarProps> {
    constructor(appTopBarProps: ITopAppBarProps) {
        super(appTopBarProps);
    }

    public render() {
        const user = this.props.authUser;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        component={LinkToHome}
                        style={{ textDecoration: "none" }}
                    >
                        Kagaribi-proto
                    </Typography>
                    {user ? (
                        <TopAppBarAccountButton />
                    ) : (
                        <TopAppBarSignInButton />
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopAppBar;
