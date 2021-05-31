import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  paper: {
    backgroundColor: 'white',
    margin: '0 10%',
    marginBottom: '2rem',
    height: '3rem',
  },
  text: {
    textAlign: 'center',
  },
});

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.text}>
          Insert Search Bar
        </Typography>
      </Paper>
    </Box>
  );
};

export default SearchBar;