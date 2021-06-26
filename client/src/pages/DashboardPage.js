import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import SearchBar from '../components/dashboard/SearchBar';
import PositionCardContainer from '../components/dashboard/PositionCardContainer';

import { useDispatch, useSelector } from 'react-redux';
import { getCommonPositions } from '../redux/actions/positionActions';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  text: {
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
}));

const DashboardPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentPositions = useSelector(state => state.positions.currentPositions);

  if (currentPositions === null) {
    dispatch(getCommonPositions());
  }

  return (
    <Box className={classes.root}>
      <SearchBar />
      {currentPositions && <PositionCardContainer
        positions={currentPositions}
      />}
    </Box>
  );
};

export default DashboardPage;