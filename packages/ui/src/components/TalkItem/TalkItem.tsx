import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Alarm, ExpandMore, Room } from "@material-ui/icons";

import clsx from "clsx";
import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import { Talk } from "../../models/Talk";

export interface Props {
  handleOnClick: any;
  intl: InjectedIntl;
  raised?: boolean;
  talk: Talk;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: "#60102f",
    },
    chip: {
      marginRight: theme.spacing(0.5),
    },
    expand: {
      marginLeft: "auto",
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    media: {
      height: 140,
    },
  }),
);

const _TalkItem: React.FunctionComponent<Props> = ({
  handleOnClick,
  intl,
  raised = false,
  talk,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const startHour = intl.formatTime(talk.startsAt);

  const topics = talk.topics.map(topic => (
    <Chip key={`${talk.id}-${topic}`} label={topic} className={classes.chip} />
  ));

  return (
    <Card raised={raised}>
      <CardActionArea onClick={() => handleOnClick(talk.id)}>
        <CardHeader
          avatar={<Avatar src={talk.avatar} />}
          title={talk.title}
          subheader={talk.speaker}
        />
        <CardContent>{topics}</CardContent>
      </CardActionArea>
      <Divider variant="middle" />

      <CardActions>
        <Chip
          icon={<Room />}
          label={talk.room}
          size="small"
          variant="outlined"
        />
        <Chip
          icon={<Alarm />}
          label={startHour}
          size="small"
          variant="outlined"
        />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more">
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit={true}>
        <CardContent>
          <Typography paragraph={true} variant="body2">
            {talk.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export const TalkItem = injectIntl(_TalkItem);

export default TalkItem;
