import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import PositionCardContainer from '../components/dashboard/PositionCardContainer';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    margin: '1rem 0.5rem',
  },
});

const CustomNotationPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
        <Typography className={classes.text} variant='h3'>CUSTOM NOTATIONS</Typography>
        <PositionCardContainer />
    </Box>
  );
};

export default CustomNotationPage;