import EmailIcon from "@material-ui/icons/Email";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { render, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import * as routes from "../../constants/routes";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import MyPage from "./MyPage";

describe("MyPage Test", () => {
    let user: firebase.User;
    beforeEach(() => {
        user = firebaseUserDummy;
    });

    it("static contents test", () => {
        const wrapper = render(<MyPage authUser={user} />);
        expect(wrapper.text()).toContain("MyPage");
    });

    it("test child component", () => {
        const wrapper = shallow(<MyPage authUser={user} />);
        expect(wrapper.find(EmailIcon).length).toBe(1);
        expect(wrapper.find(PermIdentityIcon).length).toBe(1);
    });
});

describe("MyPage Snapshots Test", () => {
    let user: firebase.User;
    beforeEach(() => {
        user = firebaseUserDummy;
    });
    it("renders MyPage with auth correctly", () => {
        const tree = renderer.create(<MyPage authUser={user} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("renders MyPage with no auth correctly", () => {
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
