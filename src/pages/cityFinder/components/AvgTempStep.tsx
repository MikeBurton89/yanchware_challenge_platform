import { InputLabel, Stack } from '@mui/material';
import FormLayout from './FormLayout';
import AvgTempToggles from '../../../components/AvgTempToggles';

const AvgTempStep = () => {
  return (
    <FormLayout question="What's your favourite weather?">
      <InputLabel id="avg-temperature"></InputLabel>
      <Stack direction="row" justifyContent="center" spacing={1}>
      <AvgTempToggles size='large'/>
      </Stack>
    </FormLayout>
  );
};

export default AvgTempStep;
