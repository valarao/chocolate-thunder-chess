import { React, useState } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getCustomPositions } from '../redux/actions/positionActions';

import PositionCardContainer from '../components/dashboard/PositionCardContainer';
import AddForm from '../components/custom/AddForm';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  text: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    margin: '1rem 0.5rem',
  },
  addButton: {
    marginTop: '2rem'
  }
}));

const CustomNotationPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customPositions = useSelector(state => state.positions.customPositions);
  const user = useSelector(state => state.users.user);
  const isSignedIn = user !== null;

  if (customPositions === null && user !== null) {
    dispatch(getCustomPositions(user.id));
  }
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box className={classes.root}>
      {!isSignedIn && <Box>
        <Typography className={classes.text}>
          Please sign in to access your custom openings.
        </Typography>
        </Box>}
      {isSignedIn && <Box>
        <AddForm
      open={open}
      handleClose={handleClose}
      ownerId={user.id}
      />
      <Button className={classes.addButton} variant="contained" color="primary" onClick={onClick}>Add Custom Opening</Button>
      { customPositions && <PositionCardContainer
        positions={customPositions}
        isCustom={true}
      />}
      </Box>
      }
    </Box>
  );
};

export default CustomNotationPage;