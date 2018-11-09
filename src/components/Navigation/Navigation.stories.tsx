import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import * as routes from "../../constants/routes";
import Navigation from "./Navigation";

storiesOf("Navigation", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={[routes.HOME, routes.ABOUT]}>
            {story()}
        </MemoryRouter>
    ))
    .add("default", () => {
        return <Navigation />;
    });
