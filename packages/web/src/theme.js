import * as colors from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: colors.indigo,
    secondary: colors.amber,
    error: colors.red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {},
  overrides: {},
});

export default theme;
