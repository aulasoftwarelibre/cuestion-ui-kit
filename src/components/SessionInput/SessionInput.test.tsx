import TextField from "@material-ui/core/TextField";

import * as React from "react";

import { createComponentWithIntl, mountWithIntl } from "../../utils/createComponentWithIntl";
import SessionInput from "./SessionInput";

describe("SessionInput", () => {
  const mockOnHandleSubmit = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(<SessionInput handleOnSubmit={mockOnHandleSubmit} length={4} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should tell to press ENTER", () => {
    const wrapper = mountWithIntl(<SessionInput handleOnSubmit={mockOnHandleSubmit} length={4} />);
    wrapper
      .find(TextField)
      .find("input")
      .simulate("change", {
        target: { name: "session-code-input", value: "1234" }
      });

    expect(wrapper.find(TextField).prop("helperText")).toStrictEqual("and press ENTER.");
  });

  it("should tell to wait until fill code", () => {
    const wrapper = mountWithIntl(<SessionInput handleOnSubmit={mockOnHandleSubmit} length={6} />);
    wrapper
      .find(TextField)
      .find("input")
      .simulate("change", {
        target: { name: "session-code-input", value: "1234" }
      });

    expect(wrapper.find(TextField).prop("helperText")).toStrictEqual("Enter 6 characters code.");
  });
});
