import { mount, shallow } from "enzyme";
import * as React from "react";
import { IntlProvider, intlShape } from "react-intl";
import * as renderer from "react-test-renderer";

import messages from "../languages/en";

const intlProvider = new IntlProvider({ locale: "en", messages }, {});
const { intl } = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
  return React.cloneElement(node, { intl });
}

export const shallowWithIntl = node => {
  return shallow(nodeWithIntlProp(node), { context: { intl } });
};

export const mountWithIntl = node => {
  return mount(nodeWithIntlProp(node), {
    childContextTypes: { intl: intlShape },
    context: { intl }
  });
};

export const rendererWithIntl = node => {
  return renderer.create(
    <IntlProvider locale="en" messages={messages}>
      {node}
    </IntlProvider>
  );
};
