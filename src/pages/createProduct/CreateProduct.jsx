import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

import { Form, Field } from 'react-final-form';
import {
  TextField,
  Checkbox,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  Paper,
  Link,
  Grid,
  CssBaseline,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: '80px',
  },
  button: {
    marginRight: theme.spacing(1),
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

function getSteps() {
  return ['Preview File', 'Upload File', 'Preview'];
}

const onSubmit = (e) => {
  e.preventDefault();
  console.log('hiii');
};

const FirstForm = () => {
  const classes = useStyles();
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
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name='name'
                    component={TextField}
                    type='text'
                    label='Product Name'
                  />
                </Grid>
                <Grid item xs={9}>
                  <Field
                    fullWidth
                    name='price'
                    required
                    component={TextField}
                    type='text'
                    label='Product Price'
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id='demo-simple-select-label'>
                      currency
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
                    label='Description'
                  />
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
};

const SecondForm = () => {
  return <h1>iam second</h1>;
};

const ThirdForm = () => {
  return <h1>Third form here</h1>;
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstForm />;
    case 1:
      return <SecondForm />;
    case 2:
      return <ThirdForm />;
    default:
      return 'Unknown step';
  }
}

export default function CreateProduct() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
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

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
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
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          //   if (isStepOptional(index)) {
          //     buttonProps.optional = (
          //       <Typography variant='caption'>Optional</Typography>
          //     );
          //   }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
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
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
