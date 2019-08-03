import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteBorder";

import * as React from "react";
import { InjectedIntl, injectIntl } from "react-intl";
import { Question } from "../../models/Question";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 320,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

interface Props {
  question: Question;
  handleOnClick: any;
  intl: InjectedIntl;
}

const _QuestionItem: React.FunctionComponent<Props> = ({
  handleOnClick,
  question,
  intl,
}) => {
  const classes = useStyles();

  const creationHour = intl.formatTime(question.createdAt);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="User avatar" className={classes.avatar}>
            {question.username.charAt(0)}
          </Avatar>
        }
        title={question.username}
        subheader={creationHour}
      />
      <CardContent>
        <Typography variant="h6" color="primary" component="p">
          {question.question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Like button"
          onClick={() => handleOnClick(question.id, !question.isVoted)}>
          {question.isVoted ? <FavoriteIcon /> : <FavoriteOutlinedIcon />}
        </IconButton>
        <Typography variant="h6" color="primary" component="p">
          {question.votes}
        </Typography>
      </CardActions>
    </Card>
  );
};

export const QuestionItem = injectIntl(_QuestionItem);

export default QuestionItem;
