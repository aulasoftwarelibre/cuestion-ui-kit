import { shallow } from "enzyme";
import * as React from "react";
import * as renderer from "react-test-renderer";

import messages from "../../languages/en";
import SessionInputTextField from "./SessionInputTextField";

describe("SessionInputTextField", () => {
  const mockOnHandleSubmit = jest.fn();

  it("should render correctly", () => {
    const component = renderer.create(
      <SessionInputTextField
        handleOnSubmit={mockOnHandleSubmit}
        length={4}
        messageEnter={messages.pressEnter}
        messageEnterLengthCharactersCode={messages.enterLengthCharactersCode}
        messageSessionCode={messages.sessionCode}
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should tell to press ENTER", () => {
    const wrapper = shallow(
      <SessionInputTextField
        handleOnSubmit={mockOnHandleSubmit}
        length={4}
        messageEnter={messages.pressEnter}
        messageEnterLengthCharactersCode={messages.enterLengthCharactersCode}
        messageSessionCode={messages.sessionCode}
      />
    );
    wrapper.find("#session-code-input").simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").prop("helperText")
    ).toStrictEqual(messages.pressEnter);
  });

  it("should tell to wait until fill code", () => {
    const wrapper = shallow(
      <SessionInputTextField
        handleOnSubmit={mockOnHandleSubmit}
        length={6}
        messageEnter={messages.pressEnter}
        messageEnterLengthCharactersCode={messages.enterLengthCharactersCode}
        messageSessionCode={messages.sessionCode}
      />
    );
    wrapper.find("#session-code-input").simulate("change", {
      target: { name: "session-code-input", value: "1234" }
    });

    expect(
      wrapper.find("#session-code-input").prop("helperText")
    ).toStrictEqual(messages.enterLengthCharactersCode);
  });
});
