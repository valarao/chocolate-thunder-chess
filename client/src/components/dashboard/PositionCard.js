import React, { useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import NotationDisplay from './NotationDisplay';
import { convertImageBufferIntoImageSrc } from '../../util/converters';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    cursor: 'pointer',
    backgroundColor: theme.palette.surface.default,
  },
  image: {
    width: '85%',
    borderRadius: '0.25rem',
    marginTop: '1rem',
  },
  title: {
    fontSize: '20px',
    padding: '0.25rem',
    margin: 0,
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
}));

const PositionCard = (props) => {
  const classes = useStyles();
  const { position } = props;
  const { baseOpening, previewImage, pgn, variant } = position;
  const { name } = baseOpening;
  const imageSrc = convertImageBufferIntoImageSrc(previewImage);
  const [open, setOpen] = useState(false);

  let fullName = variant ? variant : name;

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Paper className={classes.root}>
      <NotationDisplay
        open={open}
        handleClose={handleClose}
        name={fullName}
        imageSrc={imageSrc}
        notation={pgn}
      />
      <Box onClick={handleClickOpen}>
        <img className={classes.image} src={imageSrc} alt={fullName} />
        <Typography className={classes.title}>
          {fullName}
        </Typography>
      </Box>
    </Paper>
  );
};

export default PositionCard;