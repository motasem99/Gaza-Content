import { makeStyles } from '@material-ui/core/styles';

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
    width: '63%',
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
  '@media (max-width: 414px)': {
    sidebar: {
      display: 'none',
    },
    chat: {
      padding: 0,
    },
    incomingMessage: {
      width: '100%',
    },
    theMessage: {
      width: '100%',
    },
    incomingWidth: {
      width: '90%',
    },
    theMessageP: {
      width: '100%',
    },
    sentMessage: {
      width: '100%',
    },
    sentMessageP: {
      width: '90%',
    },
    main: {
      width: '95%',
      margin: '50px auto',
    },
    messages: {
      height: '79vh',
    },
  },
}));

export default useStyles;
