import FormLayout from './FormLayout';
import { Box } from '@mui/material';
import InternetSpeedSlider from '../../../components/InternetSpeedSlider';

const InternetSpeedStep = () => {
  return (
    <FormLayout question="Min Internet speed?">
      <Box display="flex" justifyContent="center" alignContent="center">
        <InternetSpeedSlider />
      </Box>
    </FormLayout>
  );
};

export default InternetSpeedStep;
