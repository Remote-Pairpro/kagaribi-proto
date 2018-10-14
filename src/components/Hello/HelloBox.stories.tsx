import { storiesOf } from "@storybook/react";
import * as React from "react";
import { HelloBox } from "./HelloBox";

storiesOf("HelloBox", module).add("default", () => {
    return <HelloBox compiler="TypeScript" framework="React" />;
});
