import * as React from "react";
import { IntlProvider } from "react-intl";
import * as renderer from "react-test-renderer";

const createComponentWithIntl = (children, props = { locale: "en" }) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};

export default createComponentWithIntl;
