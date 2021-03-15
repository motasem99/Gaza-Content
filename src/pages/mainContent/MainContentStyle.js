import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
    maxWidth: 345,
  },
  container: {
    display: 'flex',
  },
  media: {
    height: '140px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 30px 0 30px',
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '10px',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  avatarP: {
    fontSize: '20px',
    margin: '0 10px',
  },
  divPrice: {
    display: 'flex',
  },
  pPrice: {
    marginRight: '3px',
    fontSize: '20px',
  },
  date: {
    textAlign: 'center',
    fontSize: '15px',
  },
  cardActions: {
    justifyContent: 'space-around',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    width: '70%',
    margin: 'auto',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    height: '30px',
    margin: '20px auto auto',
    marginTop: '-17px',
    border: '1px solid #ccc',
    width: '80%',
    position: 'relative',
    backgroundColor: 'white',
  },
  searchIcon: {
    display: 'flex',
    height: '0',
    alignItems: 'center',
    marginRight: '5px',
    marginLeft: '10px',
  },
  side: {
    marginTop: '90px',
    boxShadow: '0 5px 20px rgb(0 0 0 / 12%)',
    borderRadius: '5px',
    marginLeft: '40px',
    marginRight: '40px',
    height: '600px',
    width: '20%',
  },
  radioGroup: {
    marginLeft: '40px',
    marginRight: '40px',
  },
  rangeValue: {
    width: '90%',
    margin: ' 30px auto',
  },
  subjects: {
    fontWeight: 'bold',
    marginLeft: '15px',
    marginRight: '15px',
  },
  priceRange: {
    fontWeight: 'bold',
  },
}));

export default useStyles;
