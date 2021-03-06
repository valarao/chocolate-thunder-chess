import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import SearchBar from '../components/dashboard/SearchBar';
import PositionCardContainer from '../components/dashboard/PositionCardContainer';

import { useDispatch, useSelector } from 'react-redux';
import { getCommonPositions } from '../redux/actions/positionActions';
import { getFavouritePositions } from '../redux/actions/favouriteActions';

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
  const currentFavourites = useSelector(state => state.favourites.currentFavourites);
  const user = useSelector(state => state.users.user);

  if (currentPositions === null) {
    dispatch(getCommonPositions());
  }
  if (currentFavourites === null && user !== null) {
    dispatch(getFavouritePositions(user.id));
  }

  return (
    <Box className={classes.root}>
      <SearchBar />
      {currentPositions && <PositionCardContainer
        positions={currentPositions}
        isCustom={false}
      />}
    </Box>
  );
};

export default DashboardPage;