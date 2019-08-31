import Chip from "@material-ui/core/Chip";
import * as React from "react";

import { questions } from "../../models/Question.mock";
import {
  createComponentWithIntl,
  mountWithIntl,
} from "../../utils/createComponentWithIntl";
import QuestionList from "./QuestionList";

describe("QuestionList", () => {
  const mockOnHandleClick = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(
      <QuestionList handleOnClick={mockOnHandleClick} questions={questions} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should return message from voted question", () => {
    const wrapper = mountWithIntl(
      <QuestionList handleOnClick={mockOnHandleClick} questions={questions} />,
    );

    wrapper
      .find(Chip)
      .first()
      .simulate("click");

    expect(mockOnHandleClick).toBeCalledWith(
      questions[0].id,
      !questions[0].isVoted,
    );
  });
});
