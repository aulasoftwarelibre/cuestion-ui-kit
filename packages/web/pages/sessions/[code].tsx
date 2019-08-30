import { Session, Talk, UITalkList, Filter, Topic } from "@cuestion/ui";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../src/talks/actions";
import { TalksState } from "../../src/talks/types";
import { State } from "../../src/reducer";

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

interface Props {
  code?: string | string[];
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

const SessionPage: NextPage<Props> = ({ code, session, talks }) => {
  const [filteredTalks, setFilteredTalks] = useState(reduceTalks(talks));
  const dispatch = useDispatch();
  const filter = useSelector<State, string[]>(store => store.talks.filter);
  const filterStrings = filter.map((topic: string) => topic);

  const topics = [...new Set(talks.reduce((topics: string[], talk: Talk): string[] => topics.concat(talk.topics), []))];

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
        <Filter
          onChangeHandler = { () => 
            dispatch(actions.changeFilterSessionTopics({ topics })
          } 
          topics = { topics }        
        />
        <UITalkList
          filter={filterStrings}
          talks={filteredTalks.filteredCurrentTalks}
          title="Current talks"
          handleOnClick={(value: string) =>
            dispatch(actions.openSessionTalkPage({ value })
          }
        />
        <UITalkList
          filter={filterStrings}
          talks={filteredTalks.filteredNextTalks}
          title="Next talks"
          handleOnClick={(value: string) =>
            dispatch(actions.openSessionTalkPage({ value }))
          }
        />
        <UITalkList
          filter={filterStrings}
          talks={filteredTalks.filteredPassedTalks}
          title="Finished talks"
          handleOnClick={(value: string) =>
            dispatch(actions.openSessionTalkPage({ value }))
          }
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
  //let topicstemp: string[] = talks.reduce((topics: string[], talk: Talk): string[] => topics.concat(talk.topics));
  //const topics = [...new Set(talks.reduce((topics: string[], talk: Talk): string[] => topics.concat(talk.topics)))];

  return { code, session, talks};
};

export default SessionPage;
