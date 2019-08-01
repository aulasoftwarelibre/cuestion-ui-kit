import { action } from "@storybook/addon-actions";
import { boolean, object, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { wInfo } from "../../utils/wInfo";
import ErrorMessage from "./ErrorMessage";

const stories = storiesOf("Components/ErrorMessage", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => {
    const errorMessage = text("Message", "This is an error");
    return (
      <ErrorMessage
        error={boolean("Show", true)}
        errorMessage={new Error(errorMessage)}
        onClose={action("error-closed")}
      />
    );
  })
);
