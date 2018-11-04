import { storiesOf } from "@storybook/react";
import React from "react";
import { firebaseUserDummy } from "../../test-helpers/firebase-stub";
import TopAppBar from "./TopAppBar";

storiesOf("TopAppBar", module).add("Non Auth", () => {
    return <TopAppBar authUser={null} />;
});

storiesOf("TopAppBar", module).add("Auth", () => {
    return <TopAppBar authUser={firebaseUserDummy} />;
});
