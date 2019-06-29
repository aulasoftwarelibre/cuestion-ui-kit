import { shallow } from "enzyme";
import * as React from "react";
import * as renderer from "react-test-renderer";

import SessionInput from "./SessionInput";

describe("SessionInput", () => {
  const mockHandleSubmit = jest.fn();

  it("should render correctly", () => {
    const component = renderer
      .create(<SessionInput handleSubmit={mockHandleSubmit} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should tell to press ENTER", () => {
    const wrapper = shallow(<SessionInput handleSubmit={mockHandleSubmit} />);
    wrapper.find("#session-code-input").simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").prop("helperText")
    ).toStrictEqual("and press ENTER.");
  });

  it("should tell to wait to fill code", () => {
    const wrapper = shallow(
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
