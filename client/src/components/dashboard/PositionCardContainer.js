import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';

import PositionCard from './PositionCard';
import { useDispatch, useSelector } from 'react-redux';
import { setVisiblePositions } from '../../redux/actions/positionActions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    alignContent: 'center',
    margin: '0 auto',
    padding: '0 0.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBottom: '2rem',
    width: '60%',
    maxWidth: '1000px',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '75%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  cardWrapper: {
    display: 'inline-block',
    margin: '0.5rem 0.5rem',
  },
  pagination: {
    justifyContent: 'center',
    display: 'flex',
    marginBottom: theme.spacing(2),
  }
}));

const PositionCardContainer = (props) => {
  const CARDS_TO_DISPLAY = 9;
  const { positions } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const allPositionLength = useSelector(state => state.positions.currentPositions).length;

  const onPaginationChange = (event, value) => {
    dispatch(setVisiblePositions(value));
  }

  return (
    <Box>
      <Box className={classes.root}>
        <Paper className={classes.paper}>
          {positions.map((position) => (
            <Box className={classes.cardWrapper} key={position._id}>
              <PositionCard position={position} />
            </Box>
          ))}
        </Paper>
      </Box>
      <Pagination className={classes.pagination} count={Math.ceil((allPositionLength) / CARDS_TO_DISPLAY)} onChange={onPaginationChange} color="primary" />
    </Box>
  );
};

export default PositionCardContainer;