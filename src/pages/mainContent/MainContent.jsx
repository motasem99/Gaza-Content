import React, { useState } from 'react';
import { Fragment } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';

// PhotoCard
import Logo from '../../assets/img/newphoto.webp';

// Language
import MainLangObject from '../../Languages/MainContent';

// Style
import useStyles from './MainContentStyle.js';

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

  const [value, setValue] = useState('all');

  const marks = [
    {
      value: 0,
      label: '0$',
    },
    {
      value: 100,
      label: '100$',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const moment = require('moment'); // require
  const m = moment().calendar();

  return (
    <Fragment>
      <ThemeProvider theme={ThemeDirection}>
        <div className={classes.container}>
          <div className={classes.side}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={MainLangObject.Search[Language]}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <div className={classes.rangeValue}>
              <Typography
                id='discrete-slider-always'
                gutterBottom
                className={classes.priceRange}
              >
                {MainLangObject.PriceRange[Language]}:
              </Typography>
              <Slider
                defaultValue={80}
                getAriaValueText={valuetext}
                aria-labelledby='discrete-slider-always'
                step={10}
                marks={marks}
                valueLabelDisplay='on'
              />
            </div>

            <FormControl component='fieldset'>
              <Typography
                id='discrete-slider-always'
                gutterBottom
                className={classes.subjects}
              >
                {MainLangObject.Subjects[Language]}:
              </Typography>
              <RadioGroup
                className={classes.radioGroup}
                aria-label='gender'
                name='gender1'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='all'
                  control={<Radio />}
                  label={MainLangObject.All[Language]}
                />
                <FormControlLabel
                  value='iT'
                  control={<Radio />}
                  label={MainLangObject.IT[Language]}
                />
                <FormControlLabel
                  value='sports'
                  control={<Radio />}
                  label={MainLangObject.Sports[Language]}
                />
                <FormControlLabel
                  value='languages'
                  control={<Radio />}
                  label={MainLangObject.Languages[Language]}
                />
                <FormControlLabel
                  value='medicine'
                  control={<Radio />}
                  label={MainLangObject.Medicine[Language]}
                />
                <FormControlLabel
                  value='mechanics'
                  control={<Radio />}
                  label={MainLangObject.Mechanics[Language]}
                />
                <FormControlLabel
                  value='engineering'
                  control={<Radio />}
                  label={MainLangObject.Engineering[Language]}
                />
                <FormControlLabel
                  value='history'
                  control={<Radio />}
                  label={MainLangObject.History[Language]}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className={classes.cards}>
            {data.map((item) => {
              return (
                <Fragment>
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
                </Fragment>
              );
            })}
          </div>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

export default MainContent;
