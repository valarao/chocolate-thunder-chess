import React, { useState } from "react";
import { useDispatch } from "react-redux";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

import { userAuth } from "../redux/actions/userActions";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LoginSocialFacebook
        className={classes.loginButton}
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        onResolve={async ({ data }) => {
          const u = {
            userID: data.userID,
            name: data.name,
            id: data.id,
            accessToken: data.accessToken,
            email: data.email,
          };
          await dispatch(userAuth(u));
          setLoggedIn(true);
          setUser(u);
        }}
        onReject={(err) => alert(err)}
      >
        <FacebookLoginButton>Log in with Facebook</FacebookLoginButton>
      </LoginSocialFacebook>
    </Box>
  );
};

export default LoginPage;
