import { messages } from "@cuestion/common";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import Question from "../../models/Question";
import { question } from "../../models/Question.mock";
import QuestionItem from "../QuestionItem/QuestionItem";

export interface Props {
  handleOnClick: any;
  intl: InjectedIntl;
  questions: Question[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
    },
    grid: {
      padding: theme.spacing(0),
    },
  }),
);

export const _QuestionList: React.FunctionComponent<Props> = ({
  handleOnClick,
  intl,
  questions,
}) => {
  const classes = useStyles();

  const sortByVotes = (question1: Question, question2: Question) => {
    return -1 * (question1.votes - question2.votes);
  };

  questions.sort(sortByVotes);

  const list = questions.map(question => (
    <Grid item xs={12} md={6} key={question.id} className={classes.grid}>
      <QuestionItem handleOnClick={handleOnClick} question={question} />
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="flex-start">
        <AppBar position="static" style={{ width: "100%" }}>
          <Toolbar variant="dense">
            <Typography variant="body1">
              {intl.formatMessage(messages.countQuestions, {
                count: questions.length,
              })}
            </Typography>
          </Toolbar>
        </AppBar>
        {list}
      </Grid>
    </div>
  );
};

export const QuestionList = injectIntl(_QuestionList);

export default QuestionList;
