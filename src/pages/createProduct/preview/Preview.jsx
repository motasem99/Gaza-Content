import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { Fragment } from 'react';

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
}));

const Preview = ({ form }) => {
  console.log(form.currency);
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary='Name Product' secondary={form.name} />
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
        <ListItemText primary='Description' secondary={form.description} />
      </ListItem>
    </List>
  );
};

export default Preview;
