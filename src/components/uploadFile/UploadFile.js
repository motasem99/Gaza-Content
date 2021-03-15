import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  input2: {
    display: 'none',
  },
  mainForm: {
    padding: 16,
    margin: 'auto',
    maxWidth: 750,
    border: 'none',
  },
  paper: {
    padding: 16,
    boxShadow: 'none',
  },
  gridButton: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    width: '70%',
  },
  formControl: {
    width: '100%',
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
  divSecondFile: {
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
}));

export default useStyles;
