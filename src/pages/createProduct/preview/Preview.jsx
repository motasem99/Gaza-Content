import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { Fragment } from 'react';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

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

const Preview = ({ form, secondFile, file }) => {
  console.log(form.currency);
  const classes = useStyles();

  return (
    <Fragment>
      <List className={classes.root}>
        <ListItem>
          <ListItemText
            primary='Name Product'
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
            primary='Price'
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
            primary='Description'
            secondary={
              <div>
                <p style={{ fontSize: '20px' }}>{form.description}</p>
              </div>
            }
          />
        </ListItem>
      </List>
      <div className={classes.infoFile}>
        {file && (
          <div className={classes.divImg}>
            <img src={file} alt={''} className={classes.img} />
          </div>
        )}
        <div className={classes.divSecondFile}>
          <span>Your Product Name: </span>
          <InsertDriveFileIcon color='primary' fontSize='large' />
          <span className={classes.spanSecondFile}>{secondFile.name}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Preview;
