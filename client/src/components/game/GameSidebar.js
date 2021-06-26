import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  openingNameBox: {
    backgroundColor: theme.palette.background.default,
    margin: '1rem',
    padding: '1rem 0rem',
  },
  baseOpeningText: {
    color: theme.palette.text.primary,
    fontSize: '32px',
  },
  variationText: {
    color: theme.palette.primary.main,
    fontSize: '20px',
  },
}));

// TODO: Link opening and variation display to real game data 
const GameSidebar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.openingNameBox}>
        <Typography className={classes.baseOpeningText}>
          Sicilian Defense
        </Typography>
        <Typography className={classes.variationText}>
          Dragon Variation
        </Typography>
      </Box>
    </>
  );
};

export default GameSidebar;