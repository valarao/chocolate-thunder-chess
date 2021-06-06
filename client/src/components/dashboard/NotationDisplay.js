import React, { useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';

import PositionCard from './PositionCard';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        verticalAlign: 'middle',
      },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
}));

const NotationDisplay = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box className={classes.root}>
            <Button onClick={handleClickOpen}>TEST</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    TITLE
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Name of Opening
                    </Typography>
                    <Typography gutterBottom>
                        Picture of Opening
                    </Typography>
                    <Typography gutterBottom>
                        Notation Info Copy Paste
                    </Typography>
                    <Typography gutterBottom>
                        Confirmation: Play/Cancel
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default NotationDisplay;