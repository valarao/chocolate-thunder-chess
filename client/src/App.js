import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import Navbar from './components/navigation/Navbar';
import DashboardPage from './pages/DashboardPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NotationInfoPage from './pages/NotationInfoPage';
import CustomNotationPage from './pages/CustomNotationPage';
import Footer from './components/footer/Footer';
import theme from './util/theme';
import GamePage from './pages/GamePage';

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
              <Route exact path="/" component={DashboardPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/game" component={GamePage} />
              <Route path="/info" component={NotationInfoPage} />
              <Route path="/custom" component={CustomNotationPage} />
            </Switch>
            <Footer/>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
