import { storiesOf } from "@storybook/react";
import * as React from "react";
import { About } from "./About";

storiesOf("About", module).add("default", () => {
    return <About />;
});
