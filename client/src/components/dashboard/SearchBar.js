import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
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
  },
  searchButton: {
    height: '3rem',
    marginTop: '0.2rem'
  }
});

// TODO: Add functionality to query and filter for openings. 
const SearchBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField className={classes.searchBar} id="outlined-basic" variant="outlined"/>
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