import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alarm from "@material-ui/icons/Alarm";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Room from "@material-ui/icons/Room";

import clsx from "clsx";
import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";

import { Talk } from "../../models/Talk";

export interface Props {
  handleOnClick: any;
  intl: InjectedIntl;
  talk: Talk;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: "#60102f"
    },
    card: {
      maxWidth: 345
    },
    chip: {
      marginRight: theme.spacing(0.5)
    },
    expand: {
      marginLeft: "auto",
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    media: {
      height: 140
    }
  })
);

const TalkItemWrapper: React.FunctionComponent<Props> = ({
  handleOnClick,
  intl,
  talk
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
    <Card className={classes.card}>
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
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
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

export const TalkItem = injectIntl(TalkItemWrapper);

export default TalkItem;
