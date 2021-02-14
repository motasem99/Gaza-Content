import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import Languege from './Language';
import NavLangObject from '../../Languages/Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
}));

const Nav = ({ direction, setDirection }) => {
  const classes = useStyles();

  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  return (
    <ThemeProvider theme={ThemeDirection}>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <h2>LOGO</h2>
            <nav className={styles.navbar}>
              <Button
                className={classes.menuButton}
                component={Link}
                to='/signin'
                color='inherit'
              >
                {NavLangObject.login[Language]}
              </Button>
              <Button
                className={classes.menuButton}
                component={Link}
                to='/signup'
                color='inherit'
              >
                {NavLangObject.signup[Language]}
              </Button>
              <Languege
                className={classes.menuButton}
                direction={direction}
                setDirection={setDirection}
              />
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Nav;
