import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SubjectIcon from "@material-ui/icons/Subject";
import React from "react";

const TopAppBarDrowerContents = () => {
    return (
        <div>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button>
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
