import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import * as auth from "../../firebase/auth";

interface ITopAppBarAccountButtonState {
    anchorEl: any;
}

class TopAppBarAccountButton extends React.Component<
    {},
    ITopAppBarAccountButtonState
> {
    constructor(topAppBarAccountButtonProps: any) {
        super(topAppBarAccountButtonProps);
        this.state = {
            anchorEl: null,
        };
    }

    public openMenu = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    public closeMenu = () => {
        this.setState({ anchorEl: null });
    };

    public closeAndSignOut = () => {
        this.closeMenu();
        auth.signOut();
    };

    public render() {
        const anchorEl = this.state.anchorEl;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    color="inherit"
                    onClick={this.openMenu}
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={open}
                    onClose={this.closeMenu}
                >
                    {/* See https://stackoverflow.com/questions/47873566/how-navigate-using-the-menuitem-material-ui-v1#comment88227691_47875510 */}
                    <MenuItem
                        component={Link}
                        {...{ to: routes.MY_PAGE }}
                        onClick={this.closeMenu}
                    >
                        My Page
                    </MenuItem>
                    <MenuItem onClick={this.closeAndSignOut}>Sign Out</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default TopAppBarAccountButton;
