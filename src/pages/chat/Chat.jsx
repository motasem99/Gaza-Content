import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';

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
  chat: {
    width: '70%',
    padding: '30px 15px 0 45px',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  messages: {
    height: '72vh',
    msOverflowY: 'auto',
  },
  incomingMessage: {
    display: 'flex',
  },

  incomingAvatar: {
    marginRight: '10px',
    marginLeft: '10px',
  },
  theMessage: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '92%',
  },
  incomingWidth: {
    width: '57%',
  },
  theMessageP: {
    background: '#ebebeb none repeat scroll 0 0',
    borderRadius: '3px',
    color: '#646464',
    fontSize: '14px',
    marginTop: '5px',
    padding: '10px 10px 10px 12px',
    width: '80%',
  },
  spanMessageDate: {
    color: '#747474',
    display: 'block',
    fontSize: '12px',
    margin: '8px 0 0',
  },
  outgoingMessage: {
    margin: '26px 0 26px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sentMessage: {
    width: '45%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sentMessageP: {
    background: '#05728f none repeat scroll 0 0',
    borderRadius: '3px',
    fontSize: '14px',
    margin: '0',
    color: '#fff',
    padding: '10px 10px 10px 12px',
    width: '80%',
    alignSelf: 'flex-end',
  },
  sentMessageDate: {
    display: 'block',
    fontSize: '12px',
    margin: '8px 0 0',
    color: '#747474',
    alignSelf: 'flex-end',
  },
  typeMessage: {
    borderTop: '1px solid #c4c4c4',
    position: 'relative',
  },
  writeMessage: {
    background: 'rgba(0, 0, 0, 0) none repeat scroll 0 0',
    border: 'medium none',
    color: '##605959',
    fontSize: '15px',
    minHeight: '48px',
    width: '100%',
    outline: 'none',
  },
  messageSendBtn: {
    border: 'none',
    background: 'none',
    outline: 'none',
  },
  inputMessageWrite: {
    display: 'flex',
  },
  sentMassageContent: {
    display: 'flex',
    justifyContent: 'right',
    flexDirection: 'column',
    width: '100%',
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
              placeholder='Write Your Message'
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
