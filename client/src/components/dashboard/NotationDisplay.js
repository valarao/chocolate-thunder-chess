import React, { useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'; 
import Tooltip from '@material-ui/core/Tooltip';

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
        marginLeft: 15,
        marginRight: 15,
    },
}));

const NotationDisplay = (props) => {
    const classes = useStyles();
    const { open, handleClose, name, imageLink } = props.data;
    const notation = 'insert notation info here';
    const [tooltipClicked, setTooltipClicked] = useState('Copy Text');

    const closeTooltip = () => {
        setTooltipClicked('Copy Text');
    }

    const clickTooltip = () => {
        setTooltipClicked('Copied!')
        navigator.clipboard.writeText(notation);
    }

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
                    <img className={classes.image} src={imageLink} alt={name} />
                    <Box className={classes.notationCopy}>
                        <TextField 
                            label='Notation Info'
                            id='outlined-read-only-input'
                            variant='outlined' 
                            defaultValue={notation} 
                            fullWidth 
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
            </Dialog>
        </Box>
    )
}

export default NotationDisplay;