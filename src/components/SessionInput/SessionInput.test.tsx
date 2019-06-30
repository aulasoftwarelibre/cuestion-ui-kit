import { loadTranslationObject, mountWithIntl } from "enzyme-react-intl";
import * as React from "react";

import { rendererWithIntl } from "../../helpers/intl-enzyme-test-helper";
import en from "../../languages/en";
import SessionInput from "./SessionInput";

loadTranslationObject(en);

describe("SessionInput", () => {
  const mockHandleSubmit = jest.fn();

  it("should render correctly", () => {
    const component = rendererWithIntl(
      <SessionInput handleSubmit={mockHandleSubmit} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should tell to press ENTER", () => {
    const wrapper = mountWithIntl(
      <SessionInput handleSubmit={mockHandleSubmit} />
    );
    wrapper.find("#session-code-input").at(6).simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").at(1).prop("helperText")
    ).toStrictEqual("and press ENTER.");
  });

  it("should tell to wait until fill code", () => {
    const wrapper = mountWithIntl(
      <SessionInput length={6} handleSubmit={mockHandleSubmit} />
    );
    wrapper.find("#session-code-input").at(6).simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").at(1).prop("helperText")
    ).toStrictEqual("Enter 6 characters code.");
  });
});
