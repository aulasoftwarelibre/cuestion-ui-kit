import { Session } from "@cuestion/ui";
import { AppBar, Avatar, Paper, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NextPage } from "next";
import * as React from "react";

import BottomMenu from "../components/BottomMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      height: "100vh",
      width: "100%",
      overflow: "auto",
      paddingTop: "80px",
    },
    paper: {
      margin: "0 10px 10px",
      padding: theme.spacing(5, 2),
    },
  }),
);

interface Props {
  session: Session;
}
const InfoPage: NextPage<Props> = ({ session }) => {
  const classes = useStyles({});

  return (
    <>
      <AppBar color="primary" position="absolute">
        <Toolbar>
          <Avatar src={session.logo} style={{ marginRight: "5px" }} />
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            {session.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <div className={classes.content}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5">
              SalmorejoTech 2019
            </Typography>
            <Typography component="p">
              Este congreso está organizado por el{" "}
              <a href="https://www.uco.es/aulasoftwarelibre" target="_new">
                Aula de Software Libre
              </a>{" "}
              de la Universidad de Córdoba.
            </Typography>
          </Paper>
        </div>
      </div>
      <BottomMenu value={"info"} />
    </>
  );
};

InfoPage.getInitialProps = async ({ query }) => {
  const code = "1234";

  const sessionRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURIComponent(
      code,
    )}/code`,
  );
  const session = await sessionRequest.json();

  return { session };
};

export default InfoPage;
