import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: 'red',
    minHeight: 'calc(90vh - 2rem)'
  },
  text: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    margin: '1rem 0.5rem',
  },
}));

const GamePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Typography className={classes.text} variant='h3'>GAME</Typography>
    </Box>
  );
};

export default GamePage;