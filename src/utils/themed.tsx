import * as React from "react";
import * as renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const themed = (component: React.ReactElement) =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export default themed;
