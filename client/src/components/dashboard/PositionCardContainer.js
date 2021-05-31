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
    margin: '0% 10%',
    minHeight: '600px',
  },
  text: {
    textAlign: 'center',
  },
});

const PositionCardContainer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
      <Typography className={classes.text}>
        Insert Position Card Container
      </Typography>
      </Paper>
    </Box>
  );
};

export default PositionCardContainer;