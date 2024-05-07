import { InputLabel } from '@mui/material';
import FormLayout from './FormLayout';
import TimezonesSelect from '../../../components/TimezonesSelect';

const TimezoneStep = () => {
  return (
    <FormLayout question="What timezone do you prefer?">
      <InputLabel id="timezone">Timezone</InputLabel>
      <TimezonesSelect />
    </FormLayout>
  );
};

export default TimezoneStep;
