import { render, shallow } from "enzyme";
import { createMemoryHistory } from "history";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import * as routes from "../../constants/routes";
import SignUpForm from "./SignUpForm";
import SignUpLink from "./SignUpLink";
import SignUpPage from "./SignUpPage";

describe("<SignUpLink />", () => {
    it("should have only one link", () => {
        const wrapper = render(
            <MemoryRouter initialEntries={[routes.SIGN_UP]}>
                <SignUpLink />
            </MemoryRouter>
        );
        expect(wrapper.find("a").length).toBe(1);
    });

    it("should be rendered correctly", () => {
        const tree = renderer
            .create(
                <MemoryRouter initialEntries={[routes.SIGN_UP]}>
                    <SignUpLink />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe("<SignUpForm />", () => {
    it("should be rendered correctly", () => {
        const history = createMemoryHistory();
        const tree = shallow(<SignUpForm history={history} />, {
            disableLifecycleMethods: true,
        });
        expect(tree).toMatchSnapshot();
    });
});

describe("<SignUpPage />", () => {
    it("should be rendered correctly", () => {
        const tree = shallow(<SignUpPage />);
        expect(tree).toMatchSnapshot();
    });
});
