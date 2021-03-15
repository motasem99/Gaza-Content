import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbarColor: {
    backgroundColor: '#3f51b5',
    height: '33px',
  },
  svgColor: {
    color: 'white',
  },
  displayNav: {
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
