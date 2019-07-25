import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { InjectedIntl, injectIntl } from "react-intl";
import { Topic } from "../../models/Topic";

export interface Props {
  onChangeHandler: any;
  topics: Topic[];
  intl: InjectedIntl;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    chip: {
      margin: theme.spacing(1)
    }
  })
);

const _Filter: React.FunctionComponent<Props> = ({ onChangeHandler, topics }) => {
  const classes = useStyles();

  const [selected, setSelected] = React.useState<Topic[]>([]);

  const selectedTopics: any = {};

  topics.map(topic => {
    selectedTopics[topic.label] = false;
  });

  const onClickHandler = (topic: Topic) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const index = selected.indexOf(topic);

    if (selectedTopics[topic.label] === true) {
      selectedTopics[topic.label] = false;
      selected.splice(index, 1);
    } else {
      selectedTopics[topic.label] = true;
      selected.push(topic);
    }

    setSelected(selected);
    onChangeHandler(selected);
  };

  return (
    <div className={classes.root}>
      {topics.map(topic => (
        <Chip
          key={topic.label}
          className={classes.chip}
          label={topic.label}
          onClick={onClickHandler(topic)}
          color={selectedTopics[topic.label] ? "secondary" : "default"}
          clickable
          variant={selectedTopics[topic.label] ? "default" : "outlined"}
        />
      ))}
    </div>
  );
};

export const Filter = injectIntl(_Filter);
export default Filter;
