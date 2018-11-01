import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import * as routes from "../../constants/routes";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import MyPage from "./MyPage";

storiesOf("MyPage", module).add("Auth", () => {
    return <MyPage authUser={firebaseUserDummy} />;
});

storiesOf("MyPage", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={[routes.HOME]}>{story()}</MemoryRouter>
    ))
    .add("Non Auth", () => {
        return <MyPage authUser={null} />;
    });
