import { storiesOf } from "@storybook/react";
import React from "react";
import { SignInFrom } from "../SignIn/SignIn";

storiesOf("SignIn", module).add("SignUpForm", () => {
    return <SignInFrom history={null} />;
});
