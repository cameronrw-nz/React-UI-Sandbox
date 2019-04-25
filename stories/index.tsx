import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Card } from "../src/components/Card";

import "../src/App.css";

storiesOf("Button", module).add("with some emoji", () => (
    <button onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </button>
));

storiesOf("Card", module).add("Some Card", () => (
    <div>
        <Card heading="Some Text" />
    </div>
));
