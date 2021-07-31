import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useDispatch } from 'react-redux';
import { addCustomPosition } from '../../redux/actions/positionActions';

import CloseIcon from '@material-ui/icons/Close';

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
  fields: {
    textAlign: 'right',
    marginTop: '0.25rem',
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

const AddForm = (props) => {
  const classes = useStyles();
  const { open, handleClose, ownerId } = props;
  const [name, setName] = useState('');
  const [notation, setNotation] = useState('');

  const dispatch = useDispatch();

  const addCustom = () => {

    const customPosition = {
      name: name,
      pgn: notation,
      owner: ownerId
    };

    dispatch(addCustomPosition(customPosition));
    setName('');
    setNotation('');
    handleClose();
  };
  return (
    <Dialog className={classes.dialog} onClose={handleClose} open={open}>
      <Box className={classes.root}>
        <DialogTitle className={classes.title}>
          <Typography>
            Add Custom Opening 
          </Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box className={classes.fields}>
          <TextField
              label='Name'
              className={classes.fields}
              value={name}
              onChange={e => setName(e.target.value)}
              variant='outlined'
              fullWidth
              color='primary'
            />
            <TextField
              label='PGN Notation'
              className={classes.fields}
              value={notation}
              onChange={e => setNotation(e.target.value)}
              variant='outlined'
              fullWidth
              color='primary'
            />
          </Box>
          <Box>
            <Button className={classes.buttons} variant='outlined' onClick={addCustom}>Add</Button>
            <Button className={classes.buttons} variant='outlined' onClick={handleClose}>Cancel</Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  )
}

export default AddForm;