import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '90%',
    margin: '50px auto',
  },
  sidebar: {
    border: '1px solid #000',
    height: '80vh',
    width: '25%',
  },
  sidebarTitle: {},
  sidebarHeader: {
    height: '70px',
    borderBottom: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  chat: {
    width: '70%',
  },

  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '60%',
    backgroundColor: 'white',
  },
  searchIcon: {
    display: 'flex',
    height: '0',
    alignItems: 'center',
    marginRight: '5px',
    marginLeft: '10px',
  },
}));

function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarHeader}>
          <h1 className={classes.sidebarTitle}>Recent</h1>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='search...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
      </div>
      <div className={classes.chat}>
        <h1>Chat here</h1>
      </div>
    </div>
  );
}

export default Chat;
