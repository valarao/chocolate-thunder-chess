import React, { useRef } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch, useSelector } from 'react-redux';
import { getSearchedPositions } from '../../redux/actions/positionActions';
import { useLocation } from 'react-router-dom';
import { getSearchedFavourites } from '../../redux/actions/favouriteActions';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  searchBar: {
    backgroundColor: theme.palette.surface.default,
    marginBottom: '2rem',
    width: '55%',
    fontSize: '1.5rem',
    borderRadius: '5px',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  searchButton: {
    justifyContent: 'center',
    height: '3rem',
    width: '3rem',
    marginLeft: '1rem',
    marginTop: '0.25rem',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
    cursor: 'pointer',
  }
}));

const SearchBar = () => {
  const searchFilter = useRef('');
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  const onKeyDown = (e) =>  {
    switch(e.key) {
      case 'Enter':
        onClick();
        break;
      default:
        return;
    }
  }

  const onClick = () => {
    if (searchFilter.current.value !== '') {
      switch (location.pathname) {
        case '/':
          dispatch(getSearchedPositions(searchFilter.current.value));
          break;
        case '/favourites':
          dispatch(getSearchedFavourites(user.id, searchFilter.current.value));
          break;
        default:
          return;
      }
      searchFilter.current.value = '';
    }
  }

  return (
    <Box className={classes.root}>
      <TextField className={classes.searchBar} inputRef={searchFilter} id='outlined-basic' variant='outlined' onKeyDown={onKeyDown} />
      <IconButton className={classes.searchButton} aria-label='search for openings' size='medium' onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;