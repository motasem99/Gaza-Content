import React from 'react';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

import { Form, Field } from 'react-final-form';
import { TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Paper, Grid, CssBaseline, FormControl } from '@material-ui/core';

import createLangObject from '../../../Languages/Create';

const useStyles = makeStyles((theme) => ({
  mainForm: {
    padding: 16,
    margin: 'auto',
    maxWidth: 500,
    border: 'none',
  },
  paper: {
    padding: 16,
    boxShadow: 'none',
  },
  gridButton: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    width: '70%',
  },
  formControl: {
    width: '100%',
  },
}));

const onSubmit = (e) => {
  e.preventDefault();
  console.log('hiii');
};

const PreviewFile = () => {
  const classes = useStyles();
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  return (
    <ThemeProvider theme={ThemeDirection}>
      <div className={classes.mainForm}>
        <CssBaseline />
        <Form
          onSubmit={onSubmit}
          initialValues={{ employed: true, stooge: 'larry' }}
          render={() => (
            <form onSubmit={onSubmit} noValidate>
              <Paper className={classes.paper}>
                <Grid container alignItems='flex-start' spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      required
                      name='name'
                      component={TextField}
                      type='text'
                      label={createLangObject.ProductName[Language]}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Field
                      fullWidth
                      name='price'
                      required
                      component={TextField}
                      type='text'
                      label={createLangObject.ProductPrice[Language]}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id='demo-simple-select-label'>
                        {createLangObject.Currency[Language]}
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                      >
                        <MenuItem value={10}>
                          <AttachMoneyIcon />
                        </MenuItem>
                        <MenuItem value={20}>
                          <EuroSymbolIcon />
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      type='text'
                      required
                      name='description'
                      component={TextField}
                      multiline
                      label={createLangObject.Description[Language]}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    </ThemeProvider>
  );
};

export default PreviewFile;
