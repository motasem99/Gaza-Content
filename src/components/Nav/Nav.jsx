import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Languege from './Language';
import { Link } from 'react-router-dom';

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

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Button
            className={classes.menuButton}
            component={Link}
            to='/signin'
            color='inherit'
          >
            Login
          </Button>
          <Button
            className={classes.menuButton}
            component={Link}
            to='/signup'
            color='inherit'
          >
            Signup
          </Button>
          <Languege
            className={classes.menuButton}
            direction={direction}
            setDirection={setDirection}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
