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
import LoginLangObject from '../../Languages/Login';

// Style
import useStyles from './SigninStyle.js';

export default function SignIn() {
  const classes = useStyles();
  const [error, setError] = useState('');
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value === '') {
      setError('email');
    } else if (e.target.password.value === '') {
      setError('password');
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
            {LoginLangObject.login[Language]}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label={LoginLangObject.email[Language]}
              name='email'
              autoComplete='email'
              autoFocus
              error={error === 'email' ? true : false}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label={LoginLangObject.password[Language]}
              type='password'
              id='password'
              autoComplete='current-password'
              error={error === 'password' ? true : false}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label={LoginLangObject.remember[Language]}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              {LoginLangObject.signin[Language]}
            </Button>
            <Grid container>
              <Grid item>
                <Button
                  variant='body2'
                  className={classes.menuButton}
                  component={Link}
                  to='/signup'
                  color='inherit'
                >
                  {LoginLangObject.noAccount[Language]}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
