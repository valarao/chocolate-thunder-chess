import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

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
    <div classname='App'>
      <Provider store={store}>
        <Box className={classes.root}>
          <Navbar />
          <DashboardPage />
        </Box>
      </Provider>
    </div>
  );
};

export default App;
