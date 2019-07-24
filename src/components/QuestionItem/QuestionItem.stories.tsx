import { action } from "@storybook/addon-actions";
import {object, withKnobs} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { question } from "../../models/Question.mock";
import { wInfo } from "../../utils/wInfo";
import QuestionItem from "./QuestionItem";

const stories = storiesOf("Components/QuestionItem", module);
stories.addDecorator(withKnobs);

stories.add("default", wInfo()(() => <QuestionItem handleOnClick={action("question")} question={object("Question", question)} />));
