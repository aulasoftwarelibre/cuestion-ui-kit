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

  it("should respond to change event", () => {
    const wrapper = shallow(<SessionInput handleSubmit={mockHandleSubmit} />);
    wrapper.find("#session-code-input").simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(wrapper).toMatchSnapshot();
  });
});
