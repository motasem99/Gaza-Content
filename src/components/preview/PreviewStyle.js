import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  infoFile: {
    width: '50%',
    backgroundColor: 'white',
    height: '500px',
    margin: 'auto',
  },
  divSecondFile: {
    marginTop: '40px',
    border: '1px dashed #ccc',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    paddingTop: '15px',
    alignItems: 'center',
  },
  spanSecondFile: {
    marginLeft: '5px',
  },
  img: {
    width: '100%',
    height: '350px',
    borderRadius: '8px',
    '&:hover': {
      filter: 'blur(1.8px)',
    },
  },
  divImg: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

export default useStyles;
