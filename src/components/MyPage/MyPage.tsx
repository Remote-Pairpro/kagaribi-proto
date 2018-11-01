import React from "react";
import { Redirect } from "react-router";
import * as routes from "../../constants/routes";

interface IMyPageProps {
    authUser: firebase.User;
}
class MyPage extends React.Component<IMyPageProps> {
    constructor(myPageProps: IMyPageProps) {
        super(myPageProps);
    }

    public render() {
        const user = this.props.authUser;
        return user ? (
            <div>
                <p>email: {this.props.authUser.email}</p>
                <p>uid: {this.props.authUser.uid}</p>
            </div>
        ) : (
            <Redirect to={routes.HOME} />
        );
    }
}

export default MyPage;
