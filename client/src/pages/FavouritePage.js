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
  const user = useSelector(state => state.users.user);
  const isSignedIn = user !== null;

  if (currentFavourites === null && user !== null) {
    console.log(user.id);
    dispatch(getFavouritePositions(user.id));
  }

  return (
    <Box className={classes.root}>
      {!isSignedIn && <Box>
        <Typography className={classes.text}>
          Please sign in to access your favourite openings.
        </Typography>
      </Box>}
      {isSignedIn && <Box>
        {currentFavourites && <PositionCardContainer
        positions={currentFavourites}
      />}
      </Box>}
    </Box>
  );
};

export default FavouriteNotationPage;