import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

import { Form } from 'react-final-form';
import { TextField, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Paper, Grid, CssBaseline, FormControl } from '@material-ui/core';

// Language
import createLangObject from '../../Languages/Create';

// Style
import useStyles from './PreviewFileStyle.js';

const PreviewFile = ({ form, setForm }) => {
  const classes = useStyles();
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('hiii');
  };

  return (
    <ThemeProvider theme={ThemeDirection}>
      <div className={classes.mainForm}>
        <CssBaseline />
        <Form
          value={form}
          onSubmit={onSubmit}
          initialValues={{ employed: true, stooge: 'larry' }}
          render={() => (
            <Paper className={classes.paper}>
              <Grid container alignItems='flex-start' spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    name='name'
                    id='name'
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                    }}
                    type='text'
                    label={createLangObject.ProductName[Language]}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    fullWidth
                    name='price'
                    id='price'
                    value={form.price}
                    onChange={(e) => {
                      setForm({ ...form, price: e.target.value });
                    }}
                    required
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
                      value={form.currency}
                      onChange={(e) => {
                        if (e.target.value === 'dollar') {
                          setForm({ ...form, currency: 'dollar' });
                        }
                        if (e.target.value === 'ero') {
                          setForm({ ...form, currency: 'ero' });
                        }
                      }}
                    >
                      <MenuItem value={'dollar'}>
                        <AttachMoneyIcon />
                      </MenuItem>
                      <MenuItem value={'ero'}>
                        <EuroSymbolIcon />
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type='text'
                    required
                    id='description'
                    name='description'
                    value={form.description}
                    onChange={(e) => {
                      setForm({ ...form, description: e.target.value });
                    }}
                    multiline
                    label={createLangObject.Description[Language]}
                  />
                </Grid>
              </Grid>
            </Paper>
          )}
        />
      </div>
    </ThemeProvider>
  );
};

export default PreviewFile;
