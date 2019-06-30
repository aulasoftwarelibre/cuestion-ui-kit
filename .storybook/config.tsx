import { withKnobs } from "@storybook/addon-knobs";
import { setOptions } from "@storybook/addon-options";
import { addDecorator, configure } from "@storybook/react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";

// Load the locale data for all your defined locales
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import languages from "../src/languages";

addLocaleData(en);
addLocaleData(es);
const getMessages = locale => {
  return languages[locale];
};

// Set intl configuration
setIntlConfig({
  defaultLocale: "en",
  getMessages,
  locales: ["en", "es"]
});

setOptions({
  addonPanelInRight: true,
  name: "Cuestion UI Kit"
});

const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(withKnobs);
addDecorator(withIntl);

configure(loadStories, module);
