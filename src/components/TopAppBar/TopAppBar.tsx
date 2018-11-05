import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import TopAppBarAccountButton from "./TopAppBarAccountButton";
import TopAppBarSignInButton from "./TopAppBarSignInButton";

interface ITopAppBarProps {
    authUser: firebase.User;
}

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
                    <Typography variant="h6" color="inherit">
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
