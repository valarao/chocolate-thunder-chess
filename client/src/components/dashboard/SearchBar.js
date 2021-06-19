import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'

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
  }
}));

// TODO: Add functionality to query and filter for openings. 
const SearchBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField className={classes.searchBar} id='outlined-basic' variant='outlined'/>
      <IconButton className={classes.searchButton} aria-label='search for openings' size='medium'>
          <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;