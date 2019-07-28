import IconButton from "@material-ui/core/IconButton";
import { object } from "@storybook/addon-knobs";

import * as React from "react";
import { question } from "../../models/Question.mock";
import { question2 } from "../../models/Question.mock";

import { createComponentWithIntl, mountWithIntl } from "../../utils/createComponentWithIntl";
import QuestionItem from "./QuestionItem";

describe("SessionInput", () => {
  const mockOnHandleClick = jest.fn();

  it("should render not liked question snapshot", () => {
    const component = createComponentWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={object("Question", question)} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should render liked question snapshot", () => {
    const component = createComponentWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={object("Question", question2)} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should return isVoted is true", () => {
    const component = mountWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={object("Question", question)} />
    );

    component.find(IconButton).simulate("click");

    expect(mockOnHandleClick).toHaveBeenCalledWith(question.id, !question.isVoted);
  });

  it("should return isVoted is false", () => {
    const component = mountWithIntl(
      <QuestionItem handleOnClick={mockOnHandleClick} question={object("Question", question2)} />
    );

    component.find(IconButton).simulate("click");

    expect(mockOnHandleClick).toHaveBeenCalledWith(question2.id, !question2.isVoted);
  });
});
