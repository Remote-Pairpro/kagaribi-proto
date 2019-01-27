import { shallow } from "enzyme";
import React from "react";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import TopAppBar from "./TopAppBar";
import TopAppBarAccountButton from "./TopAppBarAccountButton";
import TopAppBarDrower from "./TopAppBarDrower";
import TopAppBarDrowerContents from "./TopAppBarDrowerContents";
import TopAppBarSignInButton from "./TopAppBarSignInButton";

describe("<TopAppBar />", () => {
    let user: firebase.User;
    beforeEach(() => {
        user = firebaseUserDummy;
    });

    it("should be rendered correctly", () => {
        const tree = shallow(<TopAppBar authUser={user} />);
        expect(tree).toMatchSnapshot();
    });
});

describe("<TopAppBarAccountButton />", () => {
    it("should be rendered correctly", () => {
        const tree = shallow(<TopAppBarAccountButton />);
        expect(tree).toMatchSnapshot();
    });
});

describe("<TopAppBarDrower />", () => {
    it("should be rendered correctly (opened)", () => {
        const tree = shallow(
            <TopAppBarDrower isDrowerOpen={true} toggleDrower={() => "dummy"} />
        );
        expect(tree).toMatchSnapshot();
    });

    it("should be rendered correctly (closed)", () => {
        const tree = shallow(
            <TopAppBarDrower
                isDrowerOpen={false}
                toggleDrower={() => "dummy"}
            />
        );
        expect(tree).toMatchSnapshot();
    });
});

describe("<TopAppBarDrowerContents />", () => {
    it("should be rendered correctly", () => {
        const tree = shallow(<TopAppBarDrowerContents />);
        expect(tree).toMatchSnapshot();
    });
});

describe("<TopAppBarSignInButton />", () => {
    it("should be rendered correctly", () => {
        const tree = shallow(<TopAppBarSignInButton />);
        expect(tree).toMatchSnapshot();
    });
});
