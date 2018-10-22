import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { auth } from "../../firebase/firebase";
import Navigation from "./Navigation";

storiesOf("Navigation", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/signin"]}>{story()}</MemoryRouter>
    ))
    .add("Auth", () => {
        return <Navigation authUser={auth.currentUser} />;
    });

storiesOf("Navigation", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/", "/about"]}>{story()}</MemoryRouter>
    ))
    .add("No Auth", () => {
        return <Navigation authUser={null} />;
    });
