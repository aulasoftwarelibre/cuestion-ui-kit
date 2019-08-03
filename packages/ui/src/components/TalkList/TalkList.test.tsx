import * as React from "react";

import CardActionArea from "@material-ui/core/CardActionArea";
import { talks } from "../../models/Talk.mock";
import {
  createComponentWithIntl,
  mountWithIntl,
} from "../../utils/createComponentWithIntl";
import TalkList from "./TalkList";

describe("TalkList", () => {
  const mockOnHandleClick = jest.fn();

  it("should render correctly without filter", () => {
    const component = createComponentWithIntl(
      <TalkList
        handleOnClick={mockOnHandleClick}
        filter={[]}
        talks={talks}
        title={"Talk List"}
      />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with filter", () => {
    const component = createComponentWithIntl(
      <TalkList
        handleOnClick={mockOnHandleClick}
        filter={["Agile"]}
        talks={talks}
        title={"Talk List"}
      />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it("should return message from talk selected", () => {
    const wrapper = mountWithIntl(
      <TalkList
        handleOnClick={mockOnHandleClick}
        filter={[]}
        talks={talks}
        title={"Talk List"}
      />,
    );

    wrapper
      .find(CardActionArea)
      .first()
      .simulate("click");

    expect(mockOnHandleClick).toBeCalledWith(talks[0].id);
  });
});
