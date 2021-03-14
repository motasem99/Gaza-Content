import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

// Router
import { Link } from 'react-router-dom';
// Style
import styles from './Nav.module.css';
// Component
import LanguageButton from './Language';
// Language
import NavLangObject from '../../Languages/Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  '@media (max-width: 414px)': {
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
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
              <LanguageButton
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
