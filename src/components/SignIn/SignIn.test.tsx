import { shallow } from "enzyme";
import { createMemoryHistory } from "history";
import React from "react";
import SignInFrom from "./SignInForm";
import SignInPage from "./SignInPage";

describe("<SignInForm />", () => {
    it("should be rendered correctly", () => {
        const history = createMemoryHistory();
        const tree = shallow(<SignInFrom history={history} />, {
            disableLifecycleMethods: true,
        });
        expect(tree).toMatchSnapshot();
    });
});

describe("<SignInPage />", () => {
    it("should be rendered correctly", () => {
        const tree = shallow(<SignInPage />);
        expect(tree).toMatchSnapshot();
    });
});
