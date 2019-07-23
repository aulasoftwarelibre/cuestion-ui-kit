import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { InjectedIntl, injectIntl } from "react-intl";
import { Topics } from "../../models/Topics";

export interface Props {
  onChangeHandler: any;
  topics: Topics;
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

  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <div className={classes.root}>
      {topics.topics.map(topic => (
        <Chip
          className={classes.chip}
          label={topic}
          onClick={() => {
            selected.push(topic);
            setSelected(selected);
            onChangeHandler(selected);
          }}
        />
      ))}
    </div>
  );
};

export const Filter = injectIntl(_Filter);
export default Filter;
