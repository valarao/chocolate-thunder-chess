import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NavDrawer from './NavDrawer';
import { NAVBAR_ROUTES } from '../../util/routes';
import { useSelector } from 'react-redux';
import LoginPage from '../../pages/LoginPage';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0.5rem',
    backgroundColor: theme.palette.surface.default,
  },
  content: {
    padding: '0 1rem',
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: 'larger',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'block',
    },
  },
  leftGrid: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  links: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  pageLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    marginLeft: '2rem',
  },
  pageLinkSelected: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    marginLeft: '2rem',
  },
  icon: {
    color: theme.palette.text.primary,
    cursor: 'pointer',
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { location } = props;
  const [loginPrompt, setLoginPrompt] = useState(false);
  const user = useSelector(state => state.users.user);
  const loggedIn = user !== null;

  const openLoginPrompt = () => {
    setLoginPrompt(true);
  }

  const closeLoginPrompt = () => {
    setLoginPrompt(false);
  }

  return (
    <Box className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item xs={9} className={classes.leftGrid}>
          <NavDrawer />
          <Typography className={classes.title} component={Link} to='/'>
            OPENING TRAINER
          </Typography>
          <Box className={classes.links}>
            {NAVBAR_ROUTES.map((route) => (
              <Typography
                key={route.display}
                className={location === route.link ? classes.pageLinkSelected : classes.pageLink}
                component={Link}
                to={route.link}
              >
                {route.display}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs align='right' className={classes.rightGrid}>
          <Box>
            <LoginPage 
              closeLoginPrompt={closeLoginPrompt}
              open={loginPrompt}
            />
            <IconButton className={classes.icon} onClick={openLoginPrompt}>
              <AccountCircleIcon fontSize='large'/>
              { loggedIn && <Typography>
                {`${user.firstName} ${user.lastName}`}
              </Typography> }
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
