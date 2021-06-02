import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    verticalAlign: 'middle',

  },
  searchBar: {
    backgroundColor: 'white',
    margin: '0 0.5%',
    marginBottom: '2rem',
    height: '3rem',
    width: '50%',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  searchButton: {
    height: '2.7rem',
    marginBottom: '0.5rem'
  }
});

// TODO: Add functionality to query and filter for openings. 
const SearchBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <input className={classes.searchBar} type="search"/>
        <Button
        variant="contained"
        color="default"
        className={classes.searchButton}
        startIcon={<SearchIcon />}
        />
    </Box>
  );
};

export default SearchBar;