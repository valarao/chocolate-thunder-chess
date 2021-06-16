import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    padding: '1rem',
    marginBottom: '2rem',
  },
  text: {
    textAlign: 'center',
  },
});

// TODO: Add functionality for page changes when react-router is implemented
const Navbar = (props) => {
  const classes = useStyles();
  const path = props.location;

  const routes = ['/', '/about', '/info', '/custom']

  return (
    <Box className={classes.root}>
      <Tabs
        value={path}
        indicatorColor='primary'
        textColor='primary'
        scrollButtons='auto'
        variant='fullWidth'
      >
        <Tab value={routes[0]} label='Home' component={Link} to={routes[0]} />
        <Tab value={routes[1]} label='About' component={Link} to={routes[1]}  />
        <Tab value={routes[2]} label='Opening Info' component={Link} to={routes[2]} />
        <Tab value={routes[3]} label='Custom Notations' component={Link} to={routes[3]}  />
      </Tabs>
    </Box>
  );
};

export default Navbar;
