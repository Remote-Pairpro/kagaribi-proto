import { storiesOf } from "@storybook/react";
import React from "react";
import SignoutButton from "./SignoutButton";

storiesOf("Signout", module).add("default", () => {
    return <SignoutButton />;
});
