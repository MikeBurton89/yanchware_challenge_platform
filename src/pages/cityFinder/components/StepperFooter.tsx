import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSearchParamsAsState } from '../../../hooks/useSearchParamsAsState';

type StepperFooterProps = {
  prevStep: () => void;
  nextStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const StepperFooter = ({ prevStep, nextStep, isFirstStep, isLastStep }: StepperFooterProps) => {
  const navigate = useNavigate();
  const { searchParams } = useSearchParamsAsState();

  const handlePrevButton = () => {
    if (isFirstStep) {
      navigate('/');
    } else {
      prevStep();
    }
  }

  const handleNextButton = () => {
    if (isLastStep) {
      navigate(`/cities?${searchParams}`);
    } else {
      nextStep();
    }
  };

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <Button size="large" onClick={handlePrevButton}>
        {isFirstStep ? 'Home' : 'Previous'}
      </Button>
      <Button
        size="large"
        variant="contained"
        onClick={handleNextButton}
      >
        {isLastStep ? 'Finish' : 'Next'}
      </Button>
    </Stack>
  );
};

export default StepperFooter;
