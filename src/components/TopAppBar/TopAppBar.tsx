import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

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
                        Kagaribi
                    </Typography>
                    {user ? (
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                    ) : (
                        <Button color="inherit">Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopAppBar;
