import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { wInfo } from "../../utils/wInfo";
import QuestionInput from "./QuestionInput";

const stories = storiesOf("Components/QuestionInput", module);
stories.addDecorator(withKnobs);

stories.add("default", wInfo()(() => <QuestionInput handleOnSubmit={action("question")} />));
