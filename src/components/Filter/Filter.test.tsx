import Chip from "@material-ui/core/Chip";

import * as React from "react";

import { topics } from "../../models/Topic.mock";
import { createComponentWithIntl, mountWithIntl } from "../../utils/createComponentWithIntl";
import Filter from "./Filter";

describe("Filter", () => {
  const mockOnHandleClick = jest.fn();

  it("should render correctly", () => {
    const component = createComponentWithIntl(<Filter topics={topics} onChangeHandler={mockOnHandleClick} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should appear not selected by default", () => {
    const wrapper = mountWithIntl(<Filter topics={topics} onChangeHandler={mockOnHandleClick} />);

    expect(
      wrapper
        .find(Chip)
        .first()
        .prop("icon")
    ).toBeUndefined();
  });

  it("should appear selected", () => {
    const wrapper = mountWithIntl(<Filter topics={topics} onChangeHandler={mockOnHandleClick} />);

    wrapper
      .find(Chip)
      .first()
      .simulate("click");

    expect(
      wrapper
        .find(Chip)
        .first()
        .prop("icon")
    ).toBeDefined();
  });

  it("should return an array with the topic selected", () => {
    const wrapper = mountWithIntl(<Filter topics={topics} onChangeHandler={mockOnHandleClick} />);

    wrapper
      .find(Chip)
      .first()
      .simulate("click");

    expect(mockOnHandleClick).toBeCalledWith([topics[0]]);
  });

  it("should return an array without the topic deselected", () => {
    const wrapper = mountWithIntl(<Filter topics={topics} onChangeHandler={mockOnHandleClick} />);

    wrapper
      .find(Chip)
      .first()
      .simulate("click");
    wrapper
      .find(Chip)
      .first()
      .simulate("click");

    expect(mockOnHandleClick).lastCalledWith([]);
  });
});
