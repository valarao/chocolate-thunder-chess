import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import Navbar from './components/navigation/Navbar';
import DashboardPage from './pages/DashboardPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NotationInfoPage from './pages/NotationInfoPage';
import CustomNotationPage from './pages/CustomNotationPage';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <BrowserRouter>
        <Route path='/' render={(history) => (
          <Navbar location={history.location.pathname}/>
        )} />
        
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/info" component={NotationInfoPage} />
          <Route path="/custom" component={CustomNotationPage} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
