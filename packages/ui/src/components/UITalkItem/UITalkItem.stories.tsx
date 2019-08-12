import { action } from "@storybook/addon-actions";
import { boolean, object, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { talk } from "../../models/Talk.mock";
import { wInfo } from "../../utils/wInfo";
import UITalkItem from "./UITalkItem";

const stories = storiesOf("UIComponents/UITalkItem", module);
stories.addDecorator(withKnobs);

stories.add(
  "default blue",
  wInfo()(() => (
    <UITalkItem
      raised={boolean("raised", true)}
      handleOnClick={action("talk-item")}
      talk={object("Talk", talk)}
    />
  )),
);

stories.add(
  "default blue blurred",
  wInfo()(() => (
    <UITalkItem
      raised={false}
      handleOnClick={action("talk-item")}
      talk={object("Talk", talk)}
    />
  )),
);

stories.add(
  "default red",
  wInfo()(() => (
    <UITalkItem
      raised={boolean("raised", true)}
      handleOnClick={action("talk-item")}
      talk={object("Talk", { ...talk, color: "red" })}
    />
  )),
);

stories.add(
  "default red blurred",
  wInfo()(() => (
    <UITalkItem
      raised={false}
      handleOnClick={action("talk-item")}
      talk={object("Talk", { ...talk, color: "red" })}
    />
  )),
);
