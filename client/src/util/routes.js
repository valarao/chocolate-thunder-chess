import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';

export const NAVBAR_ROUTES = [
  {
    link: '/',
    display: 'Train',
    component: PlayArrowIcon,
  },
  {
    link: '/info',
    display: 'Position Info',
    component: InfoIcon,
  },
  {
    link: '/favourites',
    display: 'Favourite Notations',
    component: CreateIcon,
  },
  {
    link: '/custom',
    display: 'Custom Openings',
    component: CreateIcon,
  },
];
