import React from 'react';

export const useSteps = (steps: React.ReactNode[]) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep + 1 >= steps.length ? 0 : prevActiveStep + 1
    );
  };

  const prevStep = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep - 1 < 0 ? steps.length - 1 : prevActiveStep - 1
    );
  };

  const goToStep = (step: number) => {
    setActiveStep(step);
  
  }

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;


  return { activeStep, nextStep, prevStep, isLastStep, isFirstStep, goToStep };
};
