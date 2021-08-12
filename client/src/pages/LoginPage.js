import React from "react";
import { useDispatch } from "react-redux";

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import GoogleLogin from 'react-google-login';

import { GOOGLE_AUTH_CLIENT_ID } from '../util/auth';
import { authenticateUserWithGoogle } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    verticalAlign: "middle",
    paddingBottom: '1rem',
    backgroundColor: theme.palette.background.default,
  },
  dialog: {
    textAlign: 'center',
    verticalAlign: 'middle',
    maxWidth: '100%',
  },
  title: {
    textAlign: 'center',
    width: '15rem',
    backgroundColor: theme.palette.background.default
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    marginleft:  '1rem',
  },
}));

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let { closeLoginPrompt, open } = props;

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(authenticateUserWithGoogle(response.profileObj));
    closeLoginPrompt();
  }

  return (
    <Dialog className={classes.dialog} onClose={() => closeLoginPrompt()} open={open}>
      <DialogTitle className={classes.title}>
        <Typography>
        Sign In
        </Typography>
        <IconButton className={classes.closeButton} onClick={() => closeLoginPrompt()}>
            <CloseIcon />
        </IconButton>
      </DialogTitle>
        <DialogContent className={classes.content}>
          <Box>
            <GoogleLogin
              clientId={GOOGLE_AUTH_CLIENT_ID}
              buttonText='Continue with Google'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_origin'
            />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPage;
