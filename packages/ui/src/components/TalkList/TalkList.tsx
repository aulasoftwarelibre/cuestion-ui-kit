import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Talk from "../../models/Talk";
import TalkItem from "../TalkItem/TalkItem";

export interface Props {
  handleOnClick: any;
  filter: string[];
  talks: Talk[];
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 1)
    },
    grid: {
      padding: theme.spacing(2)
    }
  })
);

export const TalkList: React.FunctionComponent<Props> = ({ handleOnClick, filter, talks, title }) => {
  const classes = useStyles();

  const list = talks.map(talk => (
    <Grid item xs={12} justify="flex-start" md={4} key={talk.id} className={classes.grid}>
      <TalkItem handleOnClick={handleOnClick} talk={talk} raised={filter.some(r => talk.topics.includes(r))} />
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item key="title" xs={12}>
          <Typography component="h2" variant="h6" color="primary">
            {title}
          </Typography>
        </Grid>
        {list}
      </Grid>
    </div>
  );
};

export default TalkList;
