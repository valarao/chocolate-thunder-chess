import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    height: "10%",
    width: "100%",
  },
  hidden: {
    display: 'none',
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const { location } = props;

  return (
    <BottomNavigation className={location !== '/game' ? classes.root : classes.hidden}>
      <Box>
        <Typography align="center" variant="overline" display="block">
          © 2021 Chocolate Thunder
        </Typography>
        <Typography variant="overline">Credits to the </Typography>
        <Typography align="center" variant="overline">
          <Link href="https://chessopenings.com/eco/" rel="noreferrer">
            Encyclopedia of Chess Openings (ECO)
          </Link>
        </Typography>
      </Box>
    </BottomNavigation>
  );
}

export default Footer;