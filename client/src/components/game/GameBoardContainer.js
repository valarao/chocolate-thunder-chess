import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import GamePlayerInfo from './GamePlayerInfo';

const useStyles = makeStyles(theme => ({
  root: {
    height: '90%',
    backgroundColor: theme.palette.surface.default,
    margin: '0 5%',
    marginTop: '5vh',
    flexGrow: 1,
  },
  gameGridContainer: {
    height: '90%',
    display: 'grid',
    gridTemplateRows: '1fr 8fr 1fr',
    margin: '0% 10%',
    paddingTop: '3%',
  },
  chessboardContainer: {
    color: theme.palette.text.primary,
  },
}));

const GameBoardContainer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.gameGridContainer}>
        <GamePlayerInfo playerName='Stockfish' />
        <Box className={classes.chessboardContainer}>
          Insert Chessboard Here
        </Box>
        <GamePlayerInfo playerName='Shrek' />
      </Box>
    </Box>
  );
};

export default GameBoardContainer;