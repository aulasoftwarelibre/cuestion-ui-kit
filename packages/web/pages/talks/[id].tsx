import { Session, Talk, UITalkList } from "@cuestion/ui";
import { Props } from "@cuestion/ui/dist/components/TalkList/TalkList";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../src/talks/actions";

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
  }),
);

const TalkPage: NextPage = () => {
  const classes = useStyles({});

  return <div className={classes.root}>hello world</div>;
};

export default TalkPage;
