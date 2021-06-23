import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import GameBoardContainer from '../components/game/GameBoardContainer';
import GameSidebar from '../components/game/GameSidebar';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    minHeight: '20rem',
    height: 'calc(100vh - 4rem)',
    display: 'grid',
    gridTemplateColumns: '5fr 2fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  sidebarGridColumn: {
    margin: '1rem',
    backgroundColor: theme.palette.surface.default,
  },
}));

const GamePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.gameGridColumn}>
        <GameBoardContainer />
      </Box>
      <Box className={classes.sidebarGridColumn}>
        <GameSidebar />
      </Box>
    </Box>
  );
};

export default GamePage;