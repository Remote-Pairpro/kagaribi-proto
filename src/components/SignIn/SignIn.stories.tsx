import { storiesOf } from "@storybook/react";
import React from "react";
import SignInForm from "../SignIn/SignInForm";

storiesOf("SignIn", module).add("SignUpForm", () => {
    return <SignInForm history={null} />;
});
