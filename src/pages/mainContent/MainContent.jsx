import React, { useState } from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  fade,
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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Fragment } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// PhotoCard
import Logo from '../../assets/img/newphoto.webp';

// Language
import MainLangObject from '../../Languages/MainContent';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
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
    boxShadow: '0px 1px 3px 0px #888888',
    borderRadius: '5px',
    marginLeft: '40px',
    height: '600px',
    width: '15%',
  },
  radioGroup: {
    marginLeft: '40px',
    marginTop: '30px',
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

  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const moment = require('moment'); // require
  const m = moment().calendar();

  return (
    <Fragment>
      <div style={{ display: 'flex' }}>
        <div className={classes.side}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <FormControl component='fieldset' className={classes.radioGroup}>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              aria-label='gender'
              name='gender1'
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className={classes.cards}>
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
      </div>
    </Fragment>
  );
};

export default MainContent;
