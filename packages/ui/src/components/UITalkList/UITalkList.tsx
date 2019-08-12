import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";
import Talk from "../../models/Talk";
import UITalkItem from "../UITalkItem";

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
    },
    grid: {
      padding: theme.spacing(0),
    },
  }),
);

export const UITalkList: React.FunctionComponent<Props> = ({
  handleOnClick,
  filter,
  talks,
  title,
}) => {
  const classes = useStyles();

  const list = talks.map(talk => (
    <Grid item xs={12} md={6} key={talk.id} className={classes.grid}>
      <UITalkItem
        handleOnClick={handleOnClick}
        talk={talk}
        raised={
          filter.length === 0 || filter.some(r => talk.topics.includes(r))
        }
      />
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" style={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justify="flex-start">
        {list}
      </Grid>
    </div>
  );
};

export default UITalkList;
