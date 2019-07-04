import { Collapse, IconButton } from "@material-ui/core";
import * as React from "react";

import { talk } from "../../models/Talk.mock";
import { createComponentWithIntl, mountWithIntl } from "../../utils/createComponentWithIntl";
import TalkItem from "./TalkItem";

describe("TalkItem", () => {
  const mockHandleOnClick = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(
      <TalkItem handleOnClick={mockHandleOnClick} talk={talk} />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it ("should not show description by default", () => {
    const component = mountWithIntl(
      <TalkItem handleOnClick={mockHandleOnClick} talk={talk} />
    );

    expect(component.find(Collapse).prop("in")).toBeFalsy();
  });

  it ("should show description", () => {
    const component = mountWithIntl(
      <TalkItem handleOnClick={mockHandleOnClick} talk={talk} />
    );

    component.find(IconButton).simulate("click");

    expect(component.find(Collapse).prop("in")).toBeTruthy();
  });
});
