import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { wInfo } from "../../utils/wInfo";
import { topics } from "../../models/Topic.mock";
import Filter from "./Filter";

const stories = storiesOf("Components/Filter", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => <Filter topics={object("Topics", topics)} onChangeHandler={action("selected-topics")} />)
);
