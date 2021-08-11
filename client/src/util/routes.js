import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CreateIcon from '@material-ui/icons/Create';

export const NAVBAR_ROUTES = [
  {
    link: '/',
    display: 'Train',
    component: PlayArrowIcon,
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
