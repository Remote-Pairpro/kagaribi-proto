import { Drawer, ListItemIcon, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import SubjectIcon from "@material-ui/icons/Subject";
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import TopAppBarAccountButton from "./TopAppBarAccountButton";
import TopAppBarDrower from "./TopAppBarDrower";
import TopAppBarSignInButton from "./TopAppBarSignInButton";

interface ITopAppBarProps {
    authUser: firebase.User;
}

interface ITopAppBarState {
    isDrawerOpen: boolean;
}

// See https://material-ui.com/demos/buttons/#third-party-routing-library
const LinkToHome = (prop: any) => <Link to={routes.HOME} {...prop} />;

class TopAppBar extends React.Component<ITopAppBarProps, ITopAppBarState> {
    constructor(appTopBarProps: ITopAppBarProps) {
        super(appTopBarProps);
        this.state = { isDrawerOpen: false };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    public render() {
        const user = this.props.authUser;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <TopAppBarDrower
                        isDrowerOpen={this.state.isDrawerOpen}
                        toggleDrower={this.toggleDrawer}
                    />
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

    private toggleDrawer = (open: boolean) => () => {
        this.setState({
            isDrawerOpen: open,
        });
    };
}

export default TopAppBar;
