import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Form } from 'react-final-form';
import { FormLabel } from '@material-ui/core';
import { Paper, Grid, CssBaseline } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
  },
  divImg: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const onSubmit = (e) => {
  e.preventDefault();
  console.log('hiii');
};

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

const UploadFile = () => {
  const classes = useStyles();
  //   const [file, setFile] = useState(null);
  const [file, setFile] = useState('');

  const onChange = (file) => {
    if (!file) {
      setFile('');
      return;
    }

    fileToDataUri(file).then((file) => {
      setFile(file);
    });
  };

  return (
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
                  <FormLabel component='legend' className={classes.formControl}>
                    Upload The Product Preview:{' '}
                  </FormLabel>
                  <input
                    accept='image/*'
                    className={classes.input}
                    id='icon-button-file'
                    type='file'
                    onChange={(event) =>
                      onChange(event.target.files[0] || null)
                    }
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
                  {file && <img src={file} alt={''} className={classes.img} />}
                </div>
                <Grid item xs={12} className={classes.root}>
                  <FormLabel component='legend' className={classes.formControl}>
                    Upload The Product :{' '}
                  </FormLabel>
                  <input
                    accept='image/*'
                    className={classes.input}
                    id='icon-button-file'
                    type='file'
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
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
};

export default UploadFile;
