import EmailIcon from "@material-ui/icons/Email";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { render, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import * as routes from "../../constants/routes";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import MyPage from "./MyPage";

describe("<MyPage authUser={user} />", () => {
    let user: firebase.User;
    beforeEach(() => {
        user = firebaseUserDummy;
    });

    it("should have text 'Mypage'", () => {
        const wrapper = render(<MyPage authUser={user} />);
        expect(wrapper.text()).toContain("MyPage");
    });

    it("should have icons", () => {
        const wrapper = shallow(<MyPage authUser={user} />);
        expect(wrapper.find(EmailIcon).length).toBe(1);
        expect(wrapper.find(PermIdentityIcon).length).toBe(1);
    });

    it("should renders correctly", () => {
        const tree = renderer.create(<MyPage authUser={user} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("<MyPage authUser={null} />", () => {
    it("should renders correctly", () => {
        const tree = renderer
            .create(
                <MemoryRouter initialEntries={[routes.HOME]}>
                    <MyPage authUser={null} />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
