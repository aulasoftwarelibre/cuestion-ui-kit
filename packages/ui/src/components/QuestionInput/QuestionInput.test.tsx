import { Button, TextField } from "@material-ui/core";

import * as React from "react";

import {
  createComponentWithIntl,
  mountWithIntl,
} from "../../utils/createComponentWithIntl";
import QuestionInput from "./QuestionInput";

describe("QuestionInput", () => {
  const mockOnHandleSubmit = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(
      <QuestionInput handleOnSubmit={mockOnHandleSubmit} length={10} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should tell to press SEND", () => {
    const wrapper = mountWithIntl(
      <QuestionInput handleOnSubmit={mockOnHandleSubmit} length={10} />,
    );
    const input = wrapper.find(TextField).find("input");

    input.simulate("change", {
      target: { name: "question", value: "abcdefghij" },
    });

    expect(wrapper.find(Button).prop("disabled")).toBeFalsy();
  });

  it("should wait to tell press SEND", () => {
    const wrapper = mountWithIntl(
      <QuestionInput handleOnSubmit={mockOnHandleSubmit} length={12} />,
    );
    const input = wrapper.find(TextField).find("input");

    input.simulate("change", {
      target: { name: "question", value: "abcdefghij" },
    });

    expect(wrapper.find(Button).prop("disabled")).toBeTruthy();
  });

  it("should return a Question without an user defined", () => {
    const wrapper = mountWithIntl(
      <QuestionInput handleOnSubmit={mockOnHandleSubmit} length={10} />,
    );
    const input = wrapper.find(TextField).find("input");
    const button = wrapper.find(Button);

    input.simulate("change", {
      target: { name: "question", value: "abcdefghij" },
    });

    button.simulate("click");

    expect(mockOnHandleSubmit).toBeCalledWith({
      question: "abcdefghij",
      user: "",
    });
  });

  it("should return a Question with an user defined", () => {
    const wrapper = mountWithIntl(
      <QuestionInput handleOnSubmit={mockOnHandleSubmit} length={10} />,
    );
    const input = wrapper.find(TextField).find("input");
    const button = wrapper.find(Button);

    input.simulate("change", {
      target: { name: "question", value: "abcdefghij" },
    });

    input.simulate("change", {
      target: { name: "user", value: "user123" },
    });

    button.simulate("click");

    expect(mockOnHandleSubmit).toBeCalledWith({
      question: "abcdefghij",
      user: "user123",
    });
  });
});
