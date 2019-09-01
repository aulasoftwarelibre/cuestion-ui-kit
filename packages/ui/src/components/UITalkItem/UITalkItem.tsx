import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AccessTime, ExpandMore, Room } from "@material-ui/icons";
import clsx from "clsx";
import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import Talk from "../../models/Talk";

type colorVariant = "red" | "blue";

export interface Props {
  handleOnClick: (id: string) => void;
  intl: InjectedIntl;
  raised?: boolean;
  talk: Talk;
}

const _UITalkItem: React.FunctionComponent<Props> = ({
  handleOnClick,
  talk,
  intl,
  raised = true,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();
  const startsAt = intl.formatTime(talk.startsAt);
  const endsAt = intl.formatTime(talk.endsAt);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const topics = talk.topics.map(topic => (
    <Chip
      variant="outlined"
      key={`${talk.id}-${topic}`}
      label={topic}
      className={classes.chip}
    />
  ));

  return (
    <Card
      className={clsx(classes.card, classes[talk.color], {
        [classes.bluredCard]: !raised,
      })}>
      <CardActionArea disabled={!raised} onClick={() => handleOnClick(talk.id)}>
        <CardContent>
          <Grid
            id="actionArea"
            container
            spacing={2}
            className={clsx({ [classes.activeCard]: raised })}>
            <Grid item sm={9} xs={8}>
              <div>
                <span className={classes.meta}>
                  <Typography className={classes.font}>
                    <AccessTime className={classes.icon} />
                    {startsAt} - {endsAt}
                  </Typography>
                </span>
                <span className={classes.meta}>
                  <Typography className={classes.font}>
                    <Room className={classes.icon} />
                    {talk.room}
                  </Typography>
                </span>

                <Typography variant="h3" className={classes.title}>
                  {talk.title}
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3} xs={4}>
              <Avatar className={classes.avatar} src={talk.avatar} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <Divider variant="middle" />
      <CardActions>
        {topics}
        <IconButton
          disabled={!raised}
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more">
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={raised && expanded} timeout="auto" unmountOnExit={true}>
        <CardContent>
          <Typography paragraph={true} className={classes.font}>
            {talk.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    avatar: {
      border: "5px solid white",
      height: "80px",
      width: "80px",
      marginBottom: "6px",
      borderRadius: "50%",
      float: "right",
    },
    activeCard: {
      cursor: "pointer",
    },
    bluredCard: {
      filter: "blur(3px)",
    },
    card: {
      borderRadius: 0,
    },
    chip: {
      color: "white",
      borderColor: "white",
      marginRight: theme.spacing(1),
    },
    expand: {
      color: "white",
      border: "1px solid white",
      marginLeft: "auto",
      marginRight: "10px",
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    footer: {
      alignItems: "center",
      display: "flex",
      padding: "8px",
    },
    blue: {
      background:
        "linear-gradient(270deg, rgba(51,102,153,1) 0%, rgba(21,56,91,1) 50%)",
    },
    red: {
      background:
        "linear-gradient(270deg, rgba(69,11,33,1) 0%, rgba(96,16,47,1) 17%)",
    },
    font: {
      color: "white",
      fontSize: "15px",
    },
    icon: {
      color: "white",
      fontSize: "15px",
      verticalAlign: "middle",
      marginRight: "5px",
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    meta: {
      margin: "0 0 5px",
      marginRight: "15px",
      display: "inline-block",
    },
    paper: {
      padding: theme.spacing(3),
      margin: "auto",
    },
    title: {
      color: "white",
      fontSize: "21px",
      fontWeight: "bolder",
      lineHeight: "32px",
      margin: "0 0 6px",
    },
  }),
);

export const UITalkItem = injectIntl(_UITalkItem);

export default UITalkItem;
