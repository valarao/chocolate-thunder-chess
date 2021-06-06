import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    dialog: {
        textAlign: 'center',
        verticalAlign: 'middle',
        maxWidth: '100%',
    },

    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },

    title: {
        textAlign: 'center',
    },
    
    name: {
        margin: 0,
    },
    notationCopy: {
        marginTop: '1.5rem',
        marginBottom: '1rem',
    },
}));

const NotationDisplay = (props) => {
    const classes = useStyles();
    const { open, handleClose, name, imageLink } = props.data;

    return (
        <Box className={classes.root}>
            <Dialog className={classes.dialog} onClose={handleClose} open={open}>
                <DialogTitle className={classes.title}>
                    You Chose To Play: 
                    <h1 className={classes.name}>{name}</h1>
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <img className={classes.image} src={imageLink} alt={name} />
                    </Typography>
                    <Typography gutterBottom>
                        <TextField 
                            className={classes.notationCopy} 
                            label="Notation Info"
                            id="outlined-basic" 
                            variant="outlined" 
                            defaultValue="insert notation info here"
                            fullWidth />
                    </Typography>
                    <Typography gutterBottom className={classes.buttons}>
                        <Button>Play</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default NotationDisplay;