import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import * as routes from "../../constants/routes";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import Navigation from "./Navigation";

storiesOf("Navigation", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={[routes.HOME, routes.ABOUT]}>
            {story()}
        </MemoryRouter>
    ))
    .add("Auth", () => {
        return <Navigation authUser={firebaseUserDummy} />;
    });

storiesOf("Navigation", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={[routes.SIGN_IN]}>{story()}</MemoryRouter>
    ))
    .add("No Auth", () => {
        return <Navigation authUser={null} />;
    });
