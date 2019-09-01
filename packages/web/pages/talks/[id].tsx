import { Question, QuestionInput, QuestionList, Talk } from "@cuestion/ui";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      height: "100vh",
      width: "100%",
      overflow: "auto",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    grid: {
      padding: theme.spacing(0),
    },
    paper: {
      borderRadius: 0,
      padding: theme.spacing(0),
      margin: theme.spacing(0),
      width: "100%",
    },
  }),
);

interface Props {
  talk: Talk;
  questions: Question[];
  votedQuestions: string[];
}

const TalkPage: NextPage<Props> = ({ talk, questions, votedQuestions }) => {
  const classes = useStyles({});

  questions.forEach(
    question =>
      (question.isVoted =
        votedQuestions.filter(voted => voted === question.id).length > 0),
  );

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="absolute">
        <Toolbar>
          <Link href={`/sessions/${talk.session}`}>
            <IconButton
              className={classes.menuButton}
              edge="start"
              color="inherit">
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {talk.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <QuestionInput handleOnSubmit={() => true} length={10} />
        <Grid item xs={12} md={6} key={talk.id} className={classes.grid}>
          <QuestionList handleOnClick={() => true} questions={questions} />
        </Grid>
      </main>
    </div>
  );
};

TalkPage.getInitialProps = async ({ query }) => {
  const id = typeof query.id === "string" ? query.id : query.id.join("");

  const talkRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/talks/${encodeURIComponent(id)}`,
  );

  const talk = await talkRequest.json();

  const questionsRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/talks/${encodeURIComponent(
      id,
    )}/questions`,
  );

  const questions = await questionsRequest.json();

  const votedQuestionsRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/talks/${encodeURIComponent(id)}/voted`,
  );

  const votedQuestions = await votedQuestionsRequest.json();

  return { talk, questions, votedQuestions };
};

export default TalkPage;
