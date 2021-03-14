import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';

// Styles
import useStyles from './ChatStyle.js';

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
        <div className={classes.messages}>
          <div className={classes.incomingMessage}>
            <div className={classes.incomingAvatar}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
            </div>
            <div className={classes.theMessage}>
              <div className={classes.incomingWidth}>
                <p className={classes.theMessageP}>
                  this is my message here right now bitch this is my message
                </p>
                <span className={classes.spanMessageDate}>
                  11:01 AM | june 3
                </span>
              </div>
            </div>
          </div>
          <div className={classes.outgoingMessage}>
            <div className={classes.sentMessage}>
              <div className={classes.sentMassageContent}>
                <p className={classes.sentMessageP}>
                  Test which is a new approach to have all solutions
                </p>
                <span className={classes.sentMessageDate}>
                  11:01 AM | today
                </span>
              </div>
              <div className={classes.incomingAvatar}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.typeMessage}>
          <div className={classes.inputMessageWrite}>
            <input
              type='text'
              className={classes.writeMessage}
              placeholder='Write Your Message ...'
            />
            <button className={classes.messageSendBtn}>
              <SendIcon color='primary' className={classes.sendIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
