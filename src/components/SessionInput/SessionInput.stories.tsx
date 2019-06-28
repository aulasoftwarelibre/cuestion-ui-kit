import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../../utils/wInfo";
import SessionInput from "./SessionInput";

const stories = storiesOf("Components/SessionInput", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => <SessionInput handleSubmit={action("session-code")} />)
);
