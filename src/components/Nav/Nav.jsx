import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import CustomizedMenus from './Language';
import classes from './Nav.module.css';

const Nav = ({ direction, setDirection }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <CustomizedMenus direction={direction} setDirection={setDirection} />
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
