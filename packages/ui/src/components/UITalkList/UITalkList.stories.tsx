import { action } from "@storybook/addon-actions";
import { array, object, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { talks } from "../../models/Talk.mock";
import { wInfo } from "../../utils/wInfo";
import UITalkList from "./UITalkList";

const stories = storiesOf("UIComponents/UITalkList", module);
stories.addDecorator(withKnobs);

stories
  .add(
    "default",
    wInfo()(() => (
      <UITalkList
        handleOnClick={action("talk-item")}
        filter={[]}
        talks={object("Talks", talks)}
        title={text("title", "Talk list")}
      />
    )),
  )
  .add(
    "filtered",
    wInfo()(() => (
      <UITalkList
        handleOnClick={action("talk-item")}
        filter={array("Filter", ["Agile"])}
        talks={object("Talks", talks)}
        title={text("title", "Talk list")}
      />
    )),
  );
