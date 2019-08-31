import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { createQuestion, question } from "../../models/Question.mock";
import { wInfo } from "../../utils/wInfo";
import QuestionItem from "./QuestionItem";

const stories = storiesOf("Components/QuestionItem", module);
stories.addDecorator(withKnobs);

stories
  .add(
    "Not Liked Question",
    wInfo()(() => (
      <QuestionItem
        handleOnClick={action("question")}
        question={object("Question", createQuestion("1", 10, false))}
      />
    )),
  )
  .add(
    "Liked Question",
    wInfo()(() => (
      <QuestionItem
        handleOnClick={action("question")}
        question={object("Question", createQuestion("1", 10, true))}
      />
    )),
  );
