import { render } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";

describe("Home Test", () => {
    it("static contents test", () => {
        const wrapper = render(<Home />);
        expect(wrapper.text()).toContain("Home");
        expect(wrapper.text()).toContain("ようこそ Kagaribi へ");
    });

    it("renders Home correctly", () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
