import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import Navbar from './components/navigation/Navbar';
import DashboardPage from './pages/DashboardPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import FavouriteNotationPage from './pages/FavouritePage';
import CustomNotationPage from './pages/CustomNotationPage';
import Footer from './components/footer/Footer';
import theme from './util/theme';
import LoginPage from './pages/LoginPage';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box className={classes.root}>
          <BrowserRouter>
            <Route path='/' render={(history) => (
              <Navbar location={history.location.pathname} />
            )} />
            <Switch>
              <Route exact path="/favourites" component={FavouriteNotationPage} />
              <Route exact path="/custom" component={CustomNotationPage} />
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/login" component={LoginPage}/>
            </Switch>
            <Route path='/' render={(history) => (
              <Footer location={history.location.pathname} />
            )} />
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
