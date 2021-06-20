import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import AndroidIcon from '@material-ui/icons/Android';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 9fr',
  },
  playerIcon: {
    fontSize: '50px',
    color: theme.palette.text.primary,
  },
  playerName: {
    color: theme.palette.text.primary,
    marginLeft: '1rem',
    fontWeight: 'bold',
    fontSize: '32px',
  }
}));

const GamePlayerInfo = (props) => {
  const classes = useStyles();
  const { playerName, human } = props;
  return (
    <Box className={classes.root}>
      <Box>
        <Typography>
          {human ? <PersonIcon className={classes.playerIcon} />  : <AndroidIcon className={classes.playerIcon} />}
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.playerName} align='left'>
          {playerName}
        </Typography>
      </Box>
    </Box>
  );
};

export default GamePlayerInfo;