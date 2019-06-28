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
});
