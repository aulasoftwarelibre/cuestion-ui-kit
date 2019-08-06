import { Session, Talk, UITalkList } from "@cuestion/ui";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      height: "100vh",
      overflow: "auto",
    },
  }),
);

interface Props {
  code?: string | string[];
  session: Session;
  talks: Talk[];
}

const SessionPage: NextPage<Props> = ({ code, session, talks }) => {
  const classes = useStyles({});

  const now = new Date();

  const { currentTalks, nextTalks, passedTalks } = talks.reduce(
    (
      filteredTalks: {
        currentTalks: Talk[];
        nextTalks: Talk[];
        passedTalks: Talk[];
      },
      talk: Talk,
    ) => {
      const start = new Date(talk.startsAt);
      const end = new Date(talk.endsAt);

      if (end < now) {
        filteredTalks.passedTalks.push(talk);
      } else if (start <= now && now <= end) {
        filteredTalks.currentTalks.push(talk);
      } else if (start > now) {
        filteredTalks.nextTalks.push(talk);
      }

      return filteredTalks;
    },
    { currentTalks: [], nextTalks: [], passedTalks: [] },
  );

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="absolute">
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
          talks={currentTalks}
          title="Current talks"
          handleOnClick={() => true}
        />
        <UITalkList
          filter={[]}
          talks={nextTalks}
          title="Next talks"
          handleOnClick={() => true}
        />
        <UITalkList
          filter={[]}
          talks={passedTalks}
          title="Finished talks"
          handleOnClick={() => true}
        />
      </main>
    </div>
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

  return { code, session, talks };
};

export default SessionPage;
