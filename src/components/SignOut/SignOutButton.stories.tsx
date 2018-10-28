import { storiesOf } from "@storybook/react";
import React from "react";
import SignOutButton from "./SignOutButton";

storiesOf("SignOut", module).add("default", () => {
    return <SignOutButton />;
});
