import { Session, Talk, UITalkList } from "@cuestion/ui";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import BottomMenu from "../../components/BottomMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    footer: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      height: "100vh",
      width: "100%",
      overflow: "auto",
    },
  }),
);

interface Props {
  session: Session;
  talks: Talk[];
}

const reduceTalks = (talks: Talk[]) => {
  const now = new Date();

  return talks.reduce(
    (
      filteredTalks: {
        filteredCurrentTalks: Talk[];
        filteredNextTalks: Talk[];
        filteredPassedTalks: Talk[];
      },
      talk: Talk,
    ) => {
      const start = new Date(talk.startsAt);
      const end = new Date(talk.endsAt);

      if (end < now) {
        filteredTalks.filteredPassedTalks.push(talk);
      } else if (start <= now && now <= end) {
        filteredTalks.filteredCurrentTalks.push(talk);
      } else if (start > now) {
        filteredTalks.filteredNextTalks.push(talk);
      }

      return filteredTalks;
    },
    {
      filteredCurrentTalks: [],
      filteredNextTalks: [],
      filteredPassedTalks: [],
    },
  );
};

const SessionPage: NextPage<Props> = ({ session, talks }) => {
  const [filteredTalks, setFilteredTalks] = useState(reduceTalks(talks));
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setFilteredTalks(reduceTalks(talks));
    }, 60000);
    return () => clearInterval(timer);
  }, [
    filteredTalks.filteredCurrentTalks,
    filteredTalks.filteredNextTalks,
    filteredTalks.filteredPassedTalks,
  ]);

  const classes = useStyles({});

  return (
    <>
      <div className={classes.root}>
        <AppBar color="primary" position="absolute">
          <Toolbar>
            <Avatar src={session.logo} style={{ marginRight: "5px" }} />
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              {session.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <UITalkList
            filter={[]}
            talks={filteredTalks.filteredCurrentTalks}
            title="Ahora mismo"
            handleOnClick={(value: string) => true}
          />
          <UITalkList
            filter={[]}
            talks={filteredTalks.filteredNextTalks}
            title="Próximas charlas"
            handleOnClick={(value: string) => true}
          />
          <UITalkList
            filter={[]}
            talks={filteredTalks.filteredPassedTalks}
            title="Charlas finalizadas"
            handleOnClick={(value: string) => true}
          />
        </main>
      </div>
      <BottomMenu value={"schedule"} />
    </>
  );
};

SessionPage.getInitialProps = async ({ query }) => {
  const code =
    typeof query.code === "string" ? query.code : query.code.join("");

  const sessionRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURIComponent(
      code,
    )}/code`,
  );
  const session = await sessionRequest.json();

  const talksRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/sessions/${encodeURIComponent(
      code,
    )}/talks`,
  );

  const talks = await talksRequest.json();

  return { session, talks };
};

export default SessionPage;
