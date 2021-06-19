import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#02dbc6',
    },
    background: {
      default: '#22272e',
    },
    surface: {
      default: '#373e47',
    },
    text: {
      primary: '#cdd9e5',
      secondary: '#adbac7',
    },
    type: 'dark',
  },
});

export default theme;
