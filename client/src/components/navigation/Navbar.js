import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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
const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        scrollButtons='auto'
        variant='fullWidth'
      >
        <Tab value='Home' label='Home' />
        <Tab value='About' label='About' />
        <Tab value='Info' label='Opening Info' />
        <Tab value='Custom Notations' label='Custom Notations' />
      </Tabs>
    </Box>
  );
};

export default Navbar;
