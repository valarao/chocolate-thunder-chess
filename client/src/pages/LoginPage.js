import React from "react";
import { useDispatch } from "react-redux";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import GoogleLogin from 'react-google-login';

import { GOOGLE_AUTH_CLIENT_ID } from '../util/auth';
import { authenticateUserWithGoogle } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    verticalAlign: "middle",
    padding: "5%",
  },
  loginButton: {
    justifyContent: "center",
    maxWidth: "25%",
  },
}));

const LoginPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(authenticateUserWithGoogle(response.profileObj));
  }

  return (
    <Box className={classes.root}>
      <GoogleLogin
        clientId={GOOGLE_AUTH_CLIENT_ID}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy='single_host_origin'
      />
    </Box>
  );
};

export default LoginPage;
