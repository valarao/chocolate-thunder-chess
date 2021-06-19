import React, { createElement, useState } from 'react';
import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';

import { NAVBAR_ROUTES } from '../../util/routes';

const useStyles = makeStyles(theme => ({
  drawerList: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
  drawerListItem: {
    paddingRight: '2rem',
  },
  icon: {
    color: theme.palette.text.primary,
    cursor: 'pointer',
    marginRight: '1rem',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  }
}));

const NavDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };  
  return (
    <>
      <Typography className={classes.icon} onClick={handleDrawerOpen} >
        <MenuIcon fontSize='large' />
      </Typography>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className={classes.drawerList}>
          {NAVBAR_ROUTES.map((route) => (
            <ListItem
              button
              key={route.display}
              className={classes.drawerListItem}
              component={Link}
              to={route.link}
              onClick={handleDrawerClose}
            >
              <ListItemIcon> {createElement(route.component)}</ListItemIcon>
              <ListItemText primary={route.display} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;