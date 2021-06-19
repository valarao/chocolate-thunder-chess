import React from 'react';
import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import NavDrawer from './NavDrawer';
import { NAVBAR_ROUTES } from '../../util/routes';

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

  return (
    <Box className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item xs={9} className={classes.leftGrid}>
          <NavDrawer />
          <Typography className={classes.title} component={Link} to={NAVBAR_ROUTES[0]}>
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
          <Typography className={classes.icon} >
            <AccountCircleIcon fontSize='large' />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
