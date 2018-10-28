import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { SignUpForm, SignUpLink } from "./SignUp";

storiesOf("SignUp", module).add("SignUpForm", () => {
    return <SignUpForm history={null} />;
});

storiesOf("SignUp", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/signup"]}>{story()}</MemoryRouter>
    ))
    .add("SignUpLink", () => {
        return <SignUpLink />;
    });
