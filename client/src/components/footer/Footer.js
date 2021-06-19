import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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
      <Box>
        <Typography align="center" variant="overline" display="block">
          © 2021 Chocolate Thunder
        </Typography>
        <span>
          <Typography variant="overline">Credits to </Typography>
          <Typography align="center" variant="overline">
            <Link href="https://chessopenings.com/eco/" rel="noreferrer">
              chessopenings.com
            </Link>
          </Typography>
        </span>
      </Box>
    </BottomNavigation>
  );
}
