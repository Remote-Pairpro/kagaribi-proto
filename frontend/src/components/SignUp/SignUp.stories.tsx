import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import SignUpForm from "./SignUpForm";
import SignUpLink from "./SignUpLink";

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
