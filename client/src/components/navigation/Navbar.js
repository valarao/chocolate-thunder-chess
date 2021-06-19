import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


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
    marginRight: '1rem',
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { location } = props;
  const routes = ['/', '/about', '/info', '/custom', '/game']

  return (
    <Box className={classes.root}>
      <Grid container className={classes.content}>
        <Grid item xs={9} className={classes.leftGrid}>
          <Typography className={classes.icon} >
            <MenuIcon fontSize='large' />
          </Typography>
          <Typography className={classes.title} component={Link} to={routes[0]}>
            OPENING TRAINER
          </Typography>
          <Box className={classes.links}>
            <Typography className={location === routes[0] ? classes.pageLinkSelected : classes.pageLink} component={Link} to={routes[0]}>
              Play
            </Typography>
            <Typography className={location === routes[1] ? classes.pageLinkSelected : classes.pageLink} component={Link} to={routes[1]}>
              About
            </Typography>
            <Typography className={location === routes[2] ? classes.pageLinkSelected : classes.pageLink} component={Link} to={routes[2]}>
              Opening Info
            </Typography>
            <Typography className={location === routes[3] ? classes.pageLinkSelected : classes.pageLink} component={Link} to={routes[3]}>
              Custom Notations
            </Typography>
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
