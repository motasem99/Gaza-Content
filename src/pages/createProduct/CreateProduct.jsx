import React, { useState } from 'react';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PreviewFile from './previewFile/PreviewFile';
import UploadFile from './uploadFile/UploadFile';
import Preview from './preview/Preview';

import createLangObject from '../../Languages/Create';
import { StepLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: '80px',
  },
  button: {
    marginRight: theme.spacing(1),
    marginBottom: '25px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';

function getSteps() {
  return [
    `${createLangObject.InfoFile[Language]}`,
    `${createLangObject.UploadFile[Language]}`,
    `${createLangObject.PreviewFile[Language]}`,
  ];
}

const CreateProduct = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const [file, setFile] = useState('');
  const [secondFile, setSecondFile] = useState('');
  const [convFile, setConvFile] = useState();
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    currency: '',
  });

  const dirTheme = localStorage.getItem('dirLang');
  const ThemeDirection = createMuiTheme({ direction: dirTheme });
  const Language = localStorage.getItem('dirLang') === 'ltr' ? 'EN' : 'AR';

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PreviewFile form={form} setForm={setForm} />;
      case 1:
        return (
          <UploadFile
            file={file}
            setFile={setFile}
            secondFile={secondFile}
            setSecondFile={setSecondFile}
            convFile={convFile}
            setConvFile={setConvFile}
          />
        );
      case 2:
        return (
          <Preview
            form={form}
            setForm={setForm}
            file={file}
            setFile={setFile}
            secondFile={secondFile}
            setSecondFile={setSecondFile}
            setConvFile={setConvFile}
            convFile={convFile}
          />
        );
      default:
        return 'Unknown step';
    }
  }

  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <ThemeProvider theme={ThemeDirection}>
      <div className={classes.root}>
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          <Step>
            <StepLabel>{createLangObject.InfoFile[Language]}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{createLangObject.UploadFile[Language]}</StepLabel>
          </Step>
          <Step>
            <StepLabel>{createLangObject.PreviewFile[Language]}</StepLabel>
          </Step>
        </Stepper>

        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  {createLangObject.BackButton[Language]}
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  className={classes.button}
                >
                  {createLangObject.NextButton[Language]}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CreateProduct;
