import { loadTranslationObject } from "enzyme-react-intl";
import * as React from "react";
import { IntlProvider } from "react-intl";
import * as renderer from "react-test-renderer";

import { languages } from "@cuestion/common";

export const createComponentWithIntl = (children, props = { locale: "en" }) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};

loadTranslationObject(languages.en);

export { mountWithIntl, shallowWithIntl } from "enzyme-react-intl";
