import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    padding: '2rem',
    marginBottom: '2rem',
  },
  text: {
    textAlign: 'center',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>
        Insert Navbar
      </Typography>
    </Box>
  );
};

export default Navbar;