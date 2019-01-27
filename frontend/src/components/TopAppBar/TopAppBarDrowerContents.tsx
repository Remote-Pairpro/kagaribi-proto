import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SubjectIcon from "@material-ui/icons/Subject";
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

// See https://material-ui.com/demos/buttons/#third-party-routing-library
const HomeLink = (prop: any) => <Link to={routes.HOME} {...prop} />;
const AboutLink = (prop: any) => <Link to={routes.ABOUT} {...prop} />;

const TopAppBarDrowerContents = () => {
    return (
        <div>
            <List>
                <ListItem button component={HomeLink}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button component={AboutLink}>
                    <ListItemIcon>
                        <SubjectIcon />
                    </ListItemIcon>
                    <ListItemText>About</ListItemText>
                </ListItem>
            </List>
        </div>
    );
};

export default TopAppBarDrowerContents;
