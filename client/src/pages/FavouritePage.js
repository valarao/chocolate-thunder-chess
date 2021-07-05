import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import PositionCardContainer from '../components/dashboard/PositionCardContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getFavouritePositions } from '../redux/actions/favouriteActions';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  text: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    margin: '1rem 0.5rem',
  },
}));

const FavouriteNotationPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentFavourites = useSelector(state => state.favourites.currentFavourites);

  if (currentFavourites === null) {
    dispatch(getFavouritePositions());
  }

  return (
    <Box className={classes.root}>
      <Typography className={classes.text} variant='h3'>FAVOURITE NOTATIONS</Typography>
      {currentFavourites && <PositionCardContainer
        positions={currentFavourites}
      />}
    </Box>
  );
};

export default FavouriteNotationPage;