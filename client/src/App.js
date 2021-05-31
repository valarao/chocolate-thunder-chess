import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import Navbar from './components/navigation/Navbar';
import DashboardPage from './pages/DashboardPage';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Navbar />
      <DashboardPage />
    </Box>
  );
}

export default App;
