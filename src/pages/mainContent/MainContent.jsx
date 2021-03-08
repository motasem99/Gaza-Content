import React, { useState } from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { Fragment } from 'react';

// PhotoCard
import Logo from '../../assets/img/newphoto.webp';

// Language
import MainLangObject from '../../Languages/MainContent';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    maxWidth: 345,
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
}));

const MainContent = () => {
  const classes = useStyles();
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });
  const [data, setData] = useState([
    {
      name: 'noor',
      price: '20',
      currency: 'e',
      description:
        'This is your description about your product describe any thing you want :)',
      authName: 'noor',
    },
  ]);

  const moment = require('moment'); // require
  const m = moment().calendar();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        width: '80%',
        margin: 'auto',
        justifyContent: 'space-between',
        marginTop: '100px',
      }}
    >
      {data.map((item) => {
        return (
          <Fragment>
            <ThemeProvider theme={ThemeDirection}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Logo}
                    title='Contemplative Reptile'
                  />
                  <div className={classes.userInfo}>
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                      className={classes.avatar}
                    />
                    <Typography
                      variant='h5'
                      component='h2'
                      className={classes.avatarP}
                    >
                      {item.authName}
                    </Typography>
                  </div>
                  <CardContent>
                    <div className={classes.cardContent}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {item.name}
                      </Typography>
                      <Typography gutterBottom variant='h5' component='h2'>
                        <div className={classes.divPrice}>
                          <p className={classes.pPrice}>{item.price}</p>
                          {item.currency === 'd' ? (
                            <p>
                              <AttachMoneyIcon />
                            </p>
                          ) : (
                            <p>
                              <EuroSymbolIcon />
                            </p>
                          )}
                        </div>
                      </Typography>
                    </div>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <Typography
                    variant='h5'
                    component='h2'
                    className={classes.date}
                  >
                    {m}
                  </Typography>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Button size='small' color='primary'>
                    {MainLangObject.AddToCart[Language]}
                  </Button>
                  <Button size='small' color='primary'>
                    {MainLangObject.ShowMore[Language]}
                  </Button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </Fragment>
        );
      })}
    </div>
  );
};

export default MainContent;
