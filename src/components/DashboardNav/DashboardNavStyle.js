import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    paddingLeft: '0',
    paddingRight: '0',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
