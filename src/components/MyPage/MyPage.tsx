import React from "react";

interface IMyPageProps {
    authUser: firebase.User;
}
class MyPage extends React.Component<IMyPageProps> {
    constructor(myPageProps: IMyPageProps) {
        super(myPageProps);
    }

    public render() {
        return (
            <div>
                <p>email: {this.props.authUser.email}</p>
            </div>
        );
    }
}

export default MyPage;
