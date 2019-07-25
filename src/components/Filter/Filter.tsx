import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { InjectedIntl, injectIntl } from "react-intl";
import { Topic } from "../../models/Topic";
import DoneIcon from "@material-ui/icons/Done";

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

  const onClickHandler = (topic: Topic) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const index: number = selected.indexOf(topic);
    const updatedSelected: Topic[] =
      index >= 0 ? [...selected.slice(0, index), ...selected.slice(index + 1)] : [...selected, topic];

    setSelected(updatedSelected);
    onChangeHandler(updatedSelected);
  };

  return (
    <div className={classes.root}>
      {topics.map(topic => (
        <Chip
          key={topic.label}
          className={classes.chip}
          label={topic.label}
          onClick={onClickHandler(topic)}
          icon={selected.indexOf(topic) !== -1 ? <DoneIcon /> : undefined}
        />
      ))}
    </div>
  );
};

export const Filter = injectIntl(_Filter);
export default Filter;
