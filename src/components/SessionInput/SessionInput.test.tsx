import * as React from "react";

import {
  rendererWithIntl,
  shallowWithIntl
} from "../../helpers/intl-enzyme-test-helper";
import SessionInput from "./SessionInput";

describe("SessionInput", () => {
  const mockHandleSubmit = jest.fn();

  it("should render correctly", () => {
    const component = rendererWithIntl(
      <SessionInput handleSubmit={mockHandleSubmit} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should tell to press ENTER", () => {
    const wrapper = shallowWithIntl(
      <SessionInput handleSubmit={mockHandleSubmit} />
    );
    wrapper.find("#session-code-input").simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").prop("helperText")
    ).toStrictEqual("and press ENTER.");
  });

  it("should tell to wait to fill code", () => {
    const wrapper = shallowWithIntl(
      <SessionInput length={6} handleSubmit={mockHandleSubmit} />
    );
    wrapper.find("#session-code-input").simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").prop("helperText")
    ).toStrictEqual("Enter 6 characters code.");
  });
});
