import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: "#60102f"
    },
    secondary: {
      main: '#60102f',
      contrastText: "#ffffff"
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#60102f',
    },
  },
  typography: {
  },
  overrides: {
    MuiInputBase: {
        root: {
            color: "white",
        }
    },
    MuiFormLabel: {
        root: {
            color: "white"
        }
    },
    MuiFormHelperText: {
        root: {
            color: "white"
        }
    }
  }
});

export default theme;
