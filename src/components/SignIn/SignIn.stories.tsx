import { storiesOf } from "@storybook/react";
import React from "react";
import SignInForm from "../SignIn/SignInForm";

storiesOf("SignIn", module).add("SignInForm", () => {
    return <SignInForm history={null} />;
});
