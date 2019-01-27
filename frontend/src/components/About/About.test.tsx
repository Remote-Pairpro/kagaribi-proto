import { render, shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import About from "./About";

describe("<About />", () => {
    it("example", () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find(".hoge").length).toBe(0);
    });

    it("should have description text", () => {
        const wrapper = render(<About />);
        expect(wrapper.text()).toContain("About");
        expect(wrapper.text()).toContain(
            "Kagaribi はあなたのスケジュールを照らし、調整を容易にします。"
        );
    });

    it("should renders correctly", () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
