import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
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
      borderRadius: 0,
    },
    chip: {
      float: "right",
      margin: "16px 16px 0 0",
    },
    voted: {
      color: red[900],
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
      <Chip
        onClick={() => handleOnClick(question.id, !question.isVoted)}
        className={classes.chip}
        size="small"
        icon={
          question.isVoted ? (
            <FavoriteIcon className={classes.voted} />
          ) : (
            <FavoriteOutlinedIcon />
          )
        }
        label={question.votes}
      />
      <CardHeader
        avatar={
          <Avatar aria-label="User avatar">
            {question.username.charAt(0)}
          </Avatar>
        }
        title={question.username}
        subheader={creationHour}
      />

      <CardContent>
        <Typography color="inherit" variant="body2">
          {question.question}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const QuestionItem = injectIntl(_QuestionItem);

export default QuestionItem;
