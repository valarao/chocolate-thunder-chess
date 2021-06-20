import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import PositionCard from './PositionCard';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    margin: '0 auto',
    padding: '0 0.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBottom: '2rem',
    width: '60%',
    maxWidth: '1000px',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '75%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  },
  cardWrapper: {
    display: 'inline-block',
    margin: '0.5rem 0.5rem',
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center',
    width: '50%',
    marginLeft: '50%',
    background: theme.palette.background.default,
  }
}));

const PositionCardContainer = (props) => {
  const { positions } = props;
  const classes = useStyles();

  return (
    
    <Box className={classes.root}>
      {/* <CircularProgress size={75} className={classes.spinner}/> */}
      <Paper className={classes.paper}>
        {positions.map((position) => (
          <Box className={classes.cardWrapper} key={position._id}>
            <PositionCard position={position} />
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default PositionCardContainer;