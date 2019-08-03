import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Close, Error } from "@material-ui/icons";
import clsx from "clsx";
import * as React from "react";

export interface Props {
  onClose?: () => void;
  error: boolean;
  errorMessage?: Error;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: "flex",
      alignItems: "center",
    },
  }),
);

const ErrorMessage: React.FunctionComponent<Props> = ({
  error,
  errorMessage,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={error}
      autoHideDuration={1000}>
      <SnackbarContent
        className={clsx(classes.error)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Error className={clsx(classes.icon, classes.iconVariant)} />
            {errorMessage && errorMessage.message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}>
            <Close className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default ErrorMessage;
