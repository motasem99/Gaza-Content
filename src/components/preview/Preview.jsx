import React from 'react';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { Fragment } from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

// Language
import PreviewLangObject from '../../Languages/Preview';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  infoFile: {
    width: '50%',
    backgroundColor: 'white',
    height: '500px',
    margin: 'auto',
  },
  divSecondFile: {
    marginTop: '40px',
    border: '1px dashed #ccc',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '15px',
    paddingTop: '15px',
    alignItems: 'center',
  },
  spanSecondFile: {
    marginLeft: '5px',
  },
  img: {
    width: '100%',
    height: '350px',
    borderRadius: '8px',
    '&:hover': {
      filter: 'blur(1.8px)',
    },
  },
  divImg: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const Preview = ({ form, secondFile, file, convFile }) => {
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  const classes = useStyles();

  return (
    <ThemeProvider theme={ThemeDirection}>
      <Fragment>
        <List className={classes.root}>
          <ListItem>
            <ListItemText
              primary={PreviewLangObject.NameProduct[Language]}
              secondary={
                <div>
                  <p style={{ fontSize: '20px' }}>{form.name}</p>
                </div>
              }
            />
          </ListItem>
          <Divider component='li' />
          <ListItem>
            <ListItemText
              primary={PreviewLangObject.Price[Language]}
              secondary={
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <p style={{ marginRight: '3px', fontSize: '20px' }}>
                    {form.price}
                  </p>
                  {form.currency === 'dollar' ? (
                    <p>
                      <AttachMoneyIcon />
                    </p>
                  ) : (
                    <EuroSymbolIcon />
                  )}
                </div>
              }
            />
          </ListItem>
          <Divider component='li' />
          <ListItem>
            <ListItemText
              primary={PreviewLangObject.Description[Language]}
              secondary={
                <div>
                  <p style={{ fontSize: '20px' }}>{form.description}</p>
                </div>
              }
            />
          </ListItem>
        </List>
        <div className={classes.infoFile}>
          {convFile && (
            <div className={classes.divImg}>
              <img src={convFile} alt={''} className={classes.img} />
            </div>
          )}
          <div className={classes.divSecondFile}>
            <span>{PreviewLangObject.YourProductName[Language]}: </span>
            <InsertDriveFileIcon color='primary' fontSize='large' />
            <span className={classes.spanSecondFile}>{secondFile.name}</span>
          </div>
        </div>
      </Fragment>
    </ThemeProvider>
  );
};

export default Preview;
