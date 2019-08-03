import { action } from "@storybook/addon-actions";
import { object, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { questions } from "../../models/Question.mock";
import { wInfo } from "../../utils/wInfo";
import QuestionList from "./QuestionList";

const stories = storiesOf("Components/QuestionList", module);
stories.addDecorator(withKnobs);

stories.add(
  "default",
  wInfo()(() => (
    <QuestionList
      handleOnClick={action("question-item")}
      questions={object("Questions", questions)}
      title={text("title", "Question list")}
    />
  )),
);
