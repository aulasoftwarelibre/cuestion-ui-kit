import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { question, questions } from "../../models/Question.mock";
import { wInfo } from "../../utils/wInfo";
import QuestionList from "./QuestionList";

const stories = storiesOf("Components/QuestionList", module);
stories.addDecorator(withKnobs);

stories.add(
  "zero questions",
  wInfo()(() => (
    <QuestionList handleOnClick={action("question-item")} questions={[]} />
  )),
);

stories.add(
  "one question",
  wInfo()(() => (
    <QuestionList
      handleOnClick={action("question-item")}
      questions={object("Questions", [question])}
    />
  )),
);

stories.add(
  ">1 questions",
  wInfo()(() => (
    <QuestionList
      handleOnClick={action("question-item")}
      questions={object("Questions", questions)}
    />
  )),
);
