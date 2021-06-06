import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import PositionCard from './PositionCard';
import { getMockPositions } from '../../mock/positions';
import NotationDisplay from './NotationDisplay';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    backgroundColor: '#d3d3d3',
    margin: '0 auto',
    padding: '0 0.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    marginBottom: '2rem',
    width: '60%',
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
}));

const PositionCardContainer = () => {
  const classes = useStyles();
  // TODO: Replace mock data with axios call
  const positions = getMockPositions();
  return (
    <Box className={classes.root}>
      <NotationDisplay />
      <Paper className={classes.paper}>
        {positions.map((position) => (
          <Box className={classes.cardWrapper} key={position.name}>
            <PositionCard position={position} />
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default PositionCardContainer;