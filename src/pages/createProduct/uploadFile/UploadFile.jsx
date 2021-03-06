import React from 'react';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import { Form } from 'react-final-form';
import { FormLabel } from '@material-ui/core';
import { Paper, Grid, CssBaseline } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import createLangObject from '../../../Languages/Create';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  input2: {
    display: 'none',
  },
  mainForm: {
    padding: 16,
    margin: 'auto',
    maxWidth: 750,
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
  divSecondFile: {
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
}));

const onSubmit = (e) => {
  e.preventDefault();
  console.log('hiii');
};

const UploadFile = ({
  file,
  setFile,
  secondFile,
  setSecondFile,
  convFile,
  setConvFile,
}) => {
  const classes = useStyles();

  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';
  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const onChange = (file, id) => {
    if (id === 'icon-button-file2') {
      setSecondFile(file);
    }
    if (id === 'icon-button-file') {
      setFile(file);
    }

    if (!file) {
      setFile('');
      return;
    }
    fileToDataUri(file).then((file) => {
      if (id === 'icon-button-file') {
        setConvFile(file);
      }
    });
  };

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
                  <Grid item xs={12} className={classes.root}>
                    <FormLabel
                      component='legend'
                      className={classes.formControl}
                    >
                      {createLangObject.SmallPreview[Language]} :
                    </FormLabel>
                    <input
                      className={classes.input}
                      id='icon-button-file'
                      name='firstItem'
                      type='file'
                      onChange={(event) => {
                        onChange(
                          event.target.files[0] || null,
                          event.target.id
                        );
                      }}
                    />
                    <label htmlFor='icon-button-file'>
                      <IconButton
                        color='primary'
                        aria-label='upload picture'
                        component='span'
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </Grid>
                  <div className={classes.divImg}>
                    {convFile && (
                      <img src={convFile} alt={''} className={classes.img} />
                    )}
                  </div>
                  <Grid item xs={12} className={classes.root}>
                    <FormLabel
                      component='legend'
                      className={classes.formControl}
                    >
                      {createLangObject.UploadTheFile[Language]} :
                    </FormLabel>
                    <input
                      className={classes.input}
                      id='icon-button-file2'
                      name='secondItem'
                      type='file'
                      onChange={(event) => {
                        onChange(
                          event.target.files[0] || null,
                          event.target.id
                        );
                      }}
                    />
                    <label htmlFor='icon-button-file2'>
                      <IconButton
                        color='primary'
                        aria-label='upload picture'
                        component='span'
                      >
                        <AttachFileIcon />
                      </IconButton>
                    </label>
                  </Grid>
                  <div className={classes.divImg}>
                    {secondFile && (
                      <div className={classes.divSecondFile}>
                        <InsertDriveFileIcon color='primary' fontSize='large' />
                        <span className={classes.spanSecondFile}>
                          {secondFile.name}
                        </span>
                      </div>
                    )}
                  </div>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    </ThemeProvider>
  );
};

export default UploadFile;
