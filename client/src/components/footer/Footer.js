import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: "10%",
    width: "100%",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <div>
        <Typography align="center" variant="overline" display="block">
          © 2021 Chocolate Thunder
        </Typography>
        <span>
          <Typography variant="overline">Credits to </Typography>
          <Typography align="center" variant="overline">
            <a href="https://chessopenings.com/eco/" rel="noreferrer">
              chessopenings.com
            </a>
          </Typography>
        </span>
      </div>
    </BottomNavigation>
  );
}
