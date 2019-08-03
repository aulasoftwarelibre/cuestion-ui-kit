import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Question from "../../models/Question";
import QuestionItem from "../QuestionItem/QuestionItem";

export interface Props {
  handleOnClick: any;
  questions: Question[];
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 1),
    },
    grid: {
      padding: theme.spacing(2),
    },
  }),
);

export const QuestionList: React.FunctionComponent<Props> = ({
  handleOnClick,
  questions,
  title,
}) => {
  const classes = useStyles();

  const sortByVotes = (question1: Question, question2: Question) => {
    return -1 * (question1.votes - question2.votes);
  };

  questions.sort(sortByVotes);

  const list = questions.map(question => (
    <Grid item xs={12} key={question.id} className={classes.grid}>
      <QuestionItem handleOnClick={handleOnClick} question={question} />
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="flex-start">
        <Grid item key="title" xs={12} sm={6}>
          <Typography component="h2" variant="h6" color="primary">
            {title}
          </Typography>
        </Grid>
        {list}
      </Grid>
    </div>
  );
};

export default QuestionList;
