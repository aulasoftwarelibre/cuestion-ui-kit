import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { talk } from "../../models/Talk.mock";
import { wInfo } from "../../utils/wInfo";
import TalkItemWrapper from "./TalkItem";

const stories = storiesOf("Components/TalkItem", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <TalkItemWrapper
      handleOnClick={action("talk-item")}
      talk={object("Talk", talk)}
    />
  ))
);
