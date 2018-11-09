import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import * as routes from "../../constants/routes";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import TopAppBar from "./TopAppBar";

storiesOf("TopAppBar", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={[routes.HOME, routes.SIGN_IN]}>
            {story()}
        </MemoryRouter>
    ))
    .add("Non Auth", () => {
        return <TopAppBar authUser={null} />;
    })
    .addDecorator(story => (
        <MemoryRouter initialEntries={[routes.HOME, routes.MY_PAGE]}>
            {story()}
        </MemoryRouter>
    ))
    .add("Auth", () => {
        return <TopAppBar authUser={firebaseUserDummy} />;
    });
