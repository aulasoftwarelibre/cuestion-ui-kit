import * as React from "react";

import { talk } from "../../models/Talk.mock";
import createComponentWithIntl from "../../utils/createComponentWithIntl";
import TalkItem from "./TalkItem";

describe("TalkItem", () => {
  const mockHandleOnClick = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(
      <TalkItem handleOnClick={mockHandleOnClick} talk={talk} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
