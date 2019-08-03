import * as React from "react";

import { IconButton } from "@material-ui/core";
import { mountWithIntl } from "../../utils/createComponentWithIntl";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  const mockHandleOnClose = jest.fn();

  it("should be closed", () => {
    const component = mountWithIntl(<ErrorMessage onClose={mockHandleOnClose} error={true} />);

    component.find(IconButton).simulate("click");

    expect(mockHandleOnClose).toBeCalledTimes(1);
  });
});
