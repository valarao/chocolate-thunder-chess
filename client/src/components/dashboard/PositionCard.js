import React, { useEffect, useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { GAMEPLAY_URL } from '../../util/gameplay.js';

import NotationDisplay from './NotationDisplay';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { useDispatch, useSelector } from 'react-redux';
import { addFavouritePosition, deleteFavouritePosition } from '../../redux/actions/favouriteActions';

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
  const { position, isCustom } = props;
  const { baseOpening, previewImageLink , pgn, _id, owner } = position;

  let name = '';
  if (isCustom) {
    name = position.name;
  } else {
    name = baseOpening.name;
  }
  const [open, setOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const currentFavourites = useSelector(state => state.favourites.currentFavourites);
  const dispatch = useDispatch();

  const handleFavourite = () => {
    dispatch(addFavouritePosition(position));
  }
  const handleUnfavourite = () => {
    dispatch(deleteFavouritePosition(position._id));
  }

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

<<<<<<< HEAD
  useEffect(() => {
    if (currentFavourites !== null && currentFavourites.find(pos => pos._id === _id)) {
      setIsFavourite(true);
    }
    else {
      setIsFavourite(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFavourites])
  
=======
  const handlePlay = async () => {
    window.open(GAMEPLAY_URL)
  }
>>>>>>> main

  return (
    <Paper className={classes.root}>
      <NotationDisplay
        open={open}
        handleClose={handleClose}
        handlePlay={handlePlay}
        name={name}
        imageSrc={previewImageLink}
        notation={pgn}
        id={_id}
        isCustom={isCustom}
        owner={owner}
      />
      {isFavourite && <IconButton className={classes.favButton} onClick={handleUnfavourite} size='small' color='primary'>
        <StarIcon fontSize='large' />
      </IconButton> }
      {!isFavourite && <IconButton className={classes.favButton} onClick={handleFavourite} size='small' color='primary'>
        <StarOutlineIcon fontSize='large' />
      </IconButton> }
      <Box onClick={handleClickOpen}>
        <img className={classes.image} src={previewImageLink} alt={name} />
        <Typography className={classes.title}>
          {name}
        </Typography>
      </Box>
    </Paper>
  );
};

export default PositionCard;