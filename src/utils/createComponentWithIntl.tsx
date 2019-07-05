import { loadTranslationObject } from "enzyme-react-intl";
import * as React from "react";
import { IntlProvider } from "react-intl";
import * as renderer from "react-test-renderer";

import en from "../languages/en";

export const createComponentWithIntl = (children, props = { locale: "en" }) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};

loadTranslationObject(en);

export { mountWithIntl, shallowWithIntl } from "enzyme-react-intl";
