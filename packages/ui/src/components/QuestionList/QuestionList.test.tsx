import IconButton from "@material-ui/core/IconButton";

import * as React from "react";

import { questions } from "../../models/Question.mock";
import { createComponentWithIntl, mountWithIntl } from "../../utils/createComponentWithIntl";
import QuestionList from "./QuestionList";

describe("QuestionList", () => {
  const mockOnHandleClick = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(
      <QuestionList handleOnClick={mockOnHandleClick} questions={questions} title={"Question List"} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should return message from voted question", () => {
    const wrapper = mountWithIntl(
      <QuestionList handleOnClick={mockOnHandleClick} questions={questions} title={"Question List"} />
    );

    wrapper
      .find(IconButton)
      .first()
      .simulate("click");

    expect(mockOnHandleClick).toBeCalledWith(questions[0].id, !questions[0].isVoted);
  });
});
