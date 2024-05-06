import { Stack, Typography, Stepper, Step, StepLabel } from '@mui/material';
import React from 'react';

type StepperHeaderProps = {
  activeStep: number;
  steps: React.ReactNode[];
};

const StepperHeader = ({ activeStep, steps }: StepperHeaderProps) => {
  return (
    <Stack width={'100%'} direction="column" justifyContent="space-between" alignItems="center">
      <Typography variant="h3" color="#0788d9" gutterBottom>
        City Finder
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((_, index) => (
          <Step key={index}>
            <StepLabel>{`Step ${index + 1}`}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default StepperHeader;
