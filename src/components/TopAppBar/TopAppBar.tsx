import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import TopAppBarAccountButton from "./TopAppBarAccountButton";
import TopAppBarDrower from "./TopAppBarDrower";
import TopAppBarSignInButton from "./TopAppBarSignInButton";

interface ITopAppBarProps {
    authUser: firebase.User | null;
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
                    <div style={{ marginLeft: "auto", marginRight: "0" }}>
                        {user ? (
                            <TopAppBarAccountButton />
                        ) : (
                            <TopAppBarSignInButton />
                        )}
                    </div>
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
