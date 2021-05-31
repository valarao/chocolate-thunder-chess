import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import SearchBar from '../components/dashboard/SearchBar';
import PositionCardContainer from '../components/dashboard/PositionCardContainer';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SearchBar />
      <PositionCardContainer />
    </Box>
  );
};

export default DashboardPage;