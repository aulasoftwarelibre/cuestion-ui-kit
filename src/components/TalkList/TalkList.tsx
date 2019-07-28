import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import Talk from "../../models/Talk";
import TalkItem from "../TalkItem/TalkItem";

export interface Props {
  handleOnClick: any;
  filter: string[];
  talks: Talk[];
  title: string;
}

export const TalkList: React.FunctionComponent<Props> = ({ handleOnClick, filter, talks, title }) => {
  const list = talks.map(talk => (
    <Grid item xs={6} md={4} key={talk.id}>
      <TalkItem handleOnClick={handleOnClick} talk={talk} raised={filter.some(r => talk.topics.includes(r))} />
    </Grid>
  ));
  return (
    <div>
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
