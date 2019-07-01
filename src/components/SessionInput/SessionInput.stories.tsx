import { action } from "@storybook/addon-actions";
import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { wInfo } from "../../utils/wInfo";
import SessionInputContainer from "./SessionInputContainer";

const stories = storiesOf("Components/SessionInput", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <SessionInputContainer
      handleOnSubmit={action("session-code")}
      length={number("Length", 4, { range: true, min: 4, max: 8, step: 1 })}
    />
  ))
);
