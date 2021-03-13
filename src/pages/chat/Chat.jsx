import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '90%',
    margin: '50px auto',
  },
  sidebar: {
    border: '1px solid #c4c4c4',
    height: '80vh',
    width: '28%',
    boxShadow: '0 5px 20px rgb(0 0 0 / 17%)',
    borderRadius: '4px',
  },
  chat: {
    width: '70%',
  },
  sidebarHeader: {
    height: '40px',
    borderBottom: '0.5px solid #c4c4c4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f4f4f4',
    padding: '10px 29px 10px 10px',
  },
  sidebarTitle: {
    color: '#05728f',
    fontSize: '23px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    borderBottom: '1px solid #cdcdcd',
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
  userChat: {
    display: 'flex',
    alignItems: 'center',
    height: '90px',
    borderBottom: '1px solid #cdcdcd',
    backgroundColor: '#ebebeb',
  },
  avatarUser: {
    marginRight: '20px',
    marginLeft: '20px',
  },
  infoChat: {
    width: '100%',
  },
  userName: {
    fontSize: '15px',
    color: '#464646',
    margin: '0 0 8px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
  infoUserChat: {
    fontSize: '14px',
    color: '#989898',
    margin: 'auto',
  },
  spanDate: {
    fontSize: '13px',
    marginRight: '20px',
    marginLeft: '20px',
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
        <div className={classes.userChat}>
          <Avatar
            className={classes.avatarUser}
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
          />
          <div className={classes.infoChat}>
            <h5 className={classes.userName}>
              User Name <span className={classes.spanDate}>Date</span>
            </h5>
            <p className={classes.infoUserChat}>click to see the chat...</p>
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
