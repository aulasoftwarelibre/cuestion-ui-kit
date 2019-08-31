import Chip from "@material-ui/core/Chip";
import * as React from "react";

import { question, question2 } from "../../models/Question.mock";
import {
  createComponentWithIntl,
  mountWithIntl,
} from "../../utils/createComponentWithIntl";
import QuestionItem from "./QuestionItem";

describe("SessionInput", () => {
  const mockOnHandleClick = jest.fn();

  it("should render not liked question snapshot", () => {
    const component = createComponentWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={question} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should render liked question snapshot", () => {
    const component = createComponentWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={question2} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should return isVoted is true", () => {
    const component = mountWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={question} />,
    );

    component.find(Chip).simulate("click");

    expect(mockOnHandleClick).toHaveBeenCalledWith(
      question.id,
      !question.isVoted,
    );
  });

  it("should return isVoted is false", () => {
    const component = mountWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={question2} />,
    );

    component.find(Chip).simulate("click");

    expect(mockOnHandleClick).toHaveBeenCalledWith(
      question2.id,
      !question2.isVoted,
    );
  });
});
