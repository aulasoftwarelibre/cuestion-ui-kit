import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Toolbar,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import * as React from "react";
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";

import { messages } from "@cuestion/common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sendButton: {
      marginRight: theme.spacing(1),
    },
    block: {
      display: "block",
    },
    contentWrapper: {
      margin: "16px 16px",
    },
    paper: {
      margin: "auto",
      maxWidth: 936,
      overflow: "hidden",
    },
    searchBar: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
    },
  }),
);

interface Props {
  handleOnSubmit: any;
  intl: InjectedIntl;
  length: number;
}

interface Question {
  user: string;
  question: string;
}

const _QuestionInput: React.FunctionComponent<Props> = ({
  handleOnSubmit,
  intl,
  length,
}) => {
  const [enabled, setEnabled] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Question>({
    user: "",
    question: "",
  });
  const classes = useStyles();

  const onSubmit = () => {
    if (data.question.length < length) {
      return;
    }

    handleOnSubmit({
      ...data,
    });

    setEnabled(false);

    setData({
      user: "",
      question: "",
    });
  };

  const handleOnChange = () => event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "question") {
      setEnabled(event.target.value.length >= length);
    }
  };

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <TextField
          id="question"
          className={classes.textField}
          helperText={intl.formatMessage(messages.enterLengthCharacters, {
            length,
          })}
          label={intl.formatMessage(messages.askQuestion, {})}
          name="question"
          margin="normal"
          multiline
          onChange={handleOnChange()}
          rows={5}
          value={data.question}
        />
      </div>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar>{data.user ? data.user[0] : ""}</Avatar>
            </Grid>
            <Grid item xs>
              <TextField
                id="user"
                fullWidth
                placeholder={intl.formatMessage(messages.yourName, {})}
                InputProps={{
                  className: classes.searchInput,
                  disableUnderline: true,
                }}
                name="user"
                value={data.user}
                onChange={handleOnChange()}
              />
            </Grid>
            <Grid item>
              <Button
                id="send"
                variant="contained"
                color="primary"
                onClick={() => onSubmit()}
                disabled={!enabled}>
                <FormattedMessage {...messages.send} />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export const QuestionInput = injectIntl(_QuestionInput);

export default QuestionInput;
