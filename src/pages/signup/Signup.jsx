import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  menuButton: {
    fontSize: '12px',
    color: '#1976d2',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [error, setError] = useState('');

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
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={signupHandleClick}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type='text'
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                label='First Name'
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
                label='Last Name'
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
                label='Email Address'
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
                label='Password'
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
                label='Phone'
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
                label='Address'
                type='text'
                id='address'
                error={error === 'address' ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
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
            Sign Up
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
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
