import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";

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

    public handleMenu = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
        event.preventDefault();
    };

    public handleClose = () => {
        this.setState({ anchorEl: null });
    };

    public render() {
        const anchorEl = this.state.anchorEl;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    color="inherit"
                    onClick={this.handleMenu}
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
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Sign Out</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default TopAppBarAccountButton;
