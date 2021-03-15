import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Router
import { Link } from 'react-router-dom';
// Language
import SignupLangObject from '../../Languages/Signup';

// Style
import useStyles from './SignupStyle.js';

export default function SignUp() {
  const classes = useStyles();
  const [error, setError] = useState('');
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  const signupHandleClick = (e) => {
    e.preventDefault();
    if (
      e.target.firstName.id === 'firstName' &&
      e.target.firstName.value === ''
    ) {
      setError('firstName');
    } else if (
      e.target.lastName.id === 'lastName' &&
      e.target.lastName.value === ''
    ) {
      setError('lastName');
    } else if (e.target.email.id === 'email' && e.target.email.value === '') {
      setError('email');
    } else if (
      e.target.password.id === 'password' &&
      e.target.password.value === ''
    ) {
      setError('password');
    } else if (e.target.phone.id === 'phone' && e.target.phone.value === '') {
      setError('phone');
    } else if (
      e.target.address.id === 'address' &&
      e.target.address.value === ''
    ) {
      setError('address');
    } else {
      setError(null);
    }
  };

  return (
    <ThemeProvider theme={ThemeDirection}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {SignupLangObject.signup[Language]}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={signupHandleClick}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type='text'
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  label={SignupLangObject.firstName[Language]}
                  autoFocus
                  id='firstName'
                  error={error === 'firstName' ? true : false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  label={SignupLangObject.lastName[Language]}
                  name='lastName'
                  autoComplete='lname'
                  id='lastName'
                  error={error === 'lastName' ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  label={SignupLangObject.emailAddress[Language]}
                  name='email'
                  autoComplete='email'
                  id='email'
                  error={error === 'email' ? true : false}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label={SignupLangObject.password[Language]}
                  type='password'
                  id='password'
                  error={error === 'password' ? true : false}
                  autoComplete='current-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='phone'
                  label={SignupLangObject.phone[Language]}
                  type='text'
                  id='phone'
                  error={error === 'phone' ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='address'
                  label={SignupLangObject.address[Language]}
                  type='text'
                  id='address'
                  error={error === 'address' ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label={SignupLangObject.description[Language]}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              {SignupLangObject.signup[Language]}
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Button
                  variant='body2'
                  className={classes.menuButton}
                  component={Link}
                  to='/signin'
                  color='inherit'
                >
                  {SignupLangObject.haveAccount[Language]}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
