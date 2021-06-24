import React, { useState, useEffect } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useDispatch, useSelector } from 'react-redux';
import { getVariantPositions } from '../../redux/actions/positionActions';
import { convertImageBufferIntoImageSrc } from '../../util/converters';

const useStyles = makeStyles(theme => ({
  dialog: {
    textAlign: 'center',
    verticalAlign: 'middle',
    maxWidth: '100%',
  },
  root: {
    backgroundColor: theme.palette.background.default,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
  },
  name: {
    margin: 0,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  image: {
    width: '80%',
  },
  notationCopy: {
    textAlign: 'right',
    marginTop: '1.5rem',
    height: '70px',
  },
  copyButton: {
    position: 'relative',
    right: theme.spacing(0.5),
    bottom: theme.spacing(6.5),
  },
  buttons: {
    width: '6rem',
    float: 'middle',
    marginTop: 75,
    marginLeft: 15,
    marginRight: 15,
  },
  variationOptions: {
    textAlign: 'right',
    marginTop: '1.5rem',
    height: '70px',
  }
}));

const NotationDisplay = (props) => {
  const classes = useStyles();
  const { open, handleClose, name, id, notation, imageSrc} = props;
  const [notationState, setNotation] = useState(notation);
  const [imgState, setImg] = useState(imageSrc);
  const [tooltipClicked, setTooltipClicked] = useState('Copy Text');
  const dispatch = useDispatch();

  const closeTooltip = () => {
    setTooltipClicked('Copy Text');
  }

  const clickTooltip = () => {
    setTooltipClicked('Copied!')
    navigator.clipboard.writeText(notation);
  }

  const onVariantChange = (option) => {
    if (option === null) {
      setNotation(notation);
      setImg(imageSrc);
    } else {
      setNotation(option.pgn);
      setImg(convertImageBufferIntoImageSrc(option.previewImage));
    }
  };

  const variantOptions = useSelector(state => state.positions[id]);

  useEffect(() => {
    if (variantOptions === undefined) {
      dispatch(getVariantPositions(id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Dialog className={classes.dialog} onClose={handleClose} open={open}>
      <Box className={classes.root}>
        <DialogTitle className={classes.title}>
          You Chose To Play
          <Typography className={classes.name}>
            {name}
          </Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img className={classes.image} src={imgState} alt={name} />
          <Box className={classes.notationCopy}>
            <Autocomplete
              disabled={variantOptions === undefined || variantOptions.length === 0}
              id='variant-combo-box'
              freeSolo={false}
              onChange={(event, value) => {onVariantChange(value)}}
              options={variantOptions}
              getOptionLabel={(option) => option.variant}
              getOptionSelected={(option) => option.pgn}
              className={classes.variationOptions}
              renderInput={(params) => 
              <TextField {...params} label={ variantOptions === undefined ? 'Loading...' : variantOptions.length !== 0 ? 'Select Variation' : 'No Variations Available'} variant='outlined' />}
            />
            <TextField
              label='PGN Notation'
              id='outlined-read-only-input'
              variant='outlined'
              value={notationState}
              fullWidth
              color='primary'
              InputProps={{
                readOnly: true,
              }}
            />
            <Tooltip
              className={classes.tooltip}
              onClose={closeTooltip}
              title={tooltipClicked}
              placement='top'
              arrow
              interactive
            >
              <IconButton className={classes.copyButton} onClick={clickTooltip}>
                <FileCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Button className={classes.buttons} variant='outlined'>Play</Button>
            <Button className={classes.buttons} variant='outlined' onClick={handleClose}>Cancel</Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  )
}

export default NotationDisplay;