import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

import * as React from "react";
// import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import { Question } from "../../models/Question";

// import messages from "../../languages/messages";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: 100
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

interface Props {
  question: Question;
  handleOnClick: any;
  // intl: InjectedIntl;
}

const _QuestionItem: React.FunctionComponent<Props> = ({ handleOnClick, question }) => {
  const [pressed, setPressed] = React.useState<boolean>(!question.isVoted);

  const classes = useStyles();

  const handleLikeButton = () => {
    handleOnClick(question.id);

    setPressed(!pressed);
    question.isVoted = pressed;

    if (question.isVoted) {
      question.votes = question.votes + 1;
    } else {
      question.votes = question.votes - 1;
    }
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="User avatar" className={classes.avatar}>
            X
          </Avatar>
        }
        title={question.username}
        subheader={question.createdAt.toUTCString()}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {question.question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Like button" onClick={() => handleLikeButton()}>
          <FavoriteIcon />
        </IconButton>
        {question.votes}
      </CardActions>
    </Card>
  );
};

// export const QuestionItem = injectIntl(_QuestionItem);

export default _QuestionItem;
