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
    backgroundColor: 'white',
    margin: '0 0.5%',
    marginBottom: '2rem',
    width: '30%',
    fontSize: '1.5rem',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      width: '40%',
      height: '2rem'
    }
  },
  searchButton: {
    justifyContent: 'center',
    height: '3rem',
    width: '3rem',
    marginTop: '0.25rem',
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      width: '2rem',
      height: '2rem',
      marginTop: '0rem'
    }
  }
}));

// TODO: Add functionality to query and filter for openings. 
const SearchBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField className={classes.searchBar} id="outlined-basic" variant="outlined"/>
      <IconButton class={classes.searchButton} aria-label="search for openings" size='medium'>
          <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;