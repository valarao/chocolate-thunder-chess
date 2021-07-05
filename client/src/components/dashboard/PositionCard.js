import React, { useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import NotationDisplay from './NotationDisplay';
import { convertImageBufferIntoImageSrc } from '../../util/converters';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    cursor: 'pointer',
    backgroundColor: theme.palette.surface.default,
  },
  image: {
    width: '85%',
    borderRadius: '0.25rem',
    marginTop: '0.25rem',
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
  favButton: {
    float: 'right',
    marginRight: '0.6rem',
    marginTop: '0.25rem',
    left: theme.spacing(1),
  }
}));

const PositionCard = (props) => {
  const classes = useStyles();
  const { position } = props;
  const { baseOpening, previewImage, pgn, _id} = position;
  const { name } = baseOpening;
  const imageSrc = convertImageBufferIntoImageSrc(previewImage);
  const [open, setOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  }

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
        name={name}
        imageSrc={imageSrc}
        notation={pgn}
        id={_id}
      />
      <IconButton className={classes.favButton} onClick={handleFavourite} size='small' color='primary'>
        {isFavourite && <StarIcon fontSize='large' />}
        {!isFavourite && <StarOutlineIcon fontSize='large' />}
      </IconButton>
      <Box onClick={handleClickOpen}>
        <img className={classes.image} src={imageSrc} alt={name} />
        <Typography className={classes.title}>
          {name}
        </Typography>
      </Box>
    </Paper>
  );
};

export default PositionCard;