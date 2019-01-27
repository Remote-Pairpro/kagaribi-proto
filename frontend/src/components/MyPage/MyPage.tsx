import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EmailIcon from "@material-ui/icons/Email";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import React from "react";
import { Redirect, Switch } from "react-router-dom";
import * as routes from "../../constants/routes";

interface IMyPageProps {
    authUser: firebase.User | null;
}
class MyPage extends React.Component<IMyPageProps> {
    constructor(myPageProps: IMyPageProps) {
        super(myPageProps);
    }

    public render() {
        const user = this.props.authUser;
        return user ? (
            <div>
                <h1>MyPage</h1>
                <List>
                    <ListItem>
                        <EmailIcon />
                        <ListItemText>{user.email}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <PermIdentityIcon />
                        <ListItemText> {user.uid}</ListItemText>
                    </ListItem>
                </List>
            </div>
        ) : (
            <Switch>
                <Redirect from={routes.MY_PAGE} to={routes.HOME} />
            </Switch>
        );
    }
}

export default MyPage;
