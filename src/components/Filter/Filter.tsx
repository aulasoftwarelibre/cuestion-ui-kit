import * as React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { InjectedIntl, injectIntl } from "react-intl";
import DoneIcon from '@material-ui/icons/Done';

export interface Props {
  onChangeHandler: any;
  topics: any;
  intl: InjectedIntl;
}

const topicos = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing(1),
    },
  }),
);

const handleDelete = () => {
  alert("you've clicked");
}

const _Filter: React.FunctionComponent<Props> = ({ onChangeHandler, topics }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {topicos.map(topic => (
        <Chip
          label={topic}
          color="primary" 
          deleteIcon={<DoneIcon />}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export const Filter = injectIntl(_Filter);
export default Filter;

