import { Button, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type StepperFooterProps = {
  prevStep: () => void;
  nextStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const StepperFooter = ({ prevStep, nextStep, isFirstStep, isLastStep }: StepperFooterProps) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <Button size="large" onClick={isFirstStep ? () => navigate('/') : () => prevStep()}>
        {isFirstStep ? 'Home' : 'Previous'}
      </Button>
      <Button
        size="large"
        variant="contained"
        onClick={isLastStep ? () => navigate('/cities') : () => nextStep()}
      >
        {isLastStep ? 'Finish' : 'Next'}
      </Button>
    </Stack>
  );
};

export default StepperFooter;
