import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 9fr',
    },
    playerImage: {
      height: '100%',
      width: '100%',
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
    const { playerName } = props;
    return (
        <Box className={classes.root}>
          <Box>
            <Paper className={classes.playerImage}>
              Image
            </Paper>
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