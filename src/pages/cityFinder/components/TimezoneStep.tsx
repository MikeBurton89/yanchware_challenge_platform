import { InputLabel, MenuItem, Select } from '@mui/material';

import { timezones } from '../../../utils/constants';
import { useSearchParamsAsState } from '../../../hooks/useSearchParamsAsState';
import FormLayout from './FormLayout';

const TimezoneStep = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();

  return (
    <FormLayout question="What timezone do you prefer?">
      <InputLabel id="timezone">Timezone</InputLabel>
      <Select
        placeholder='Select a timezone'
        label="Timezone"
        value={searchParams.get('timezone')}
        onChange={(e) => handleAddParams('timezone', e.target.value as string)}
      >
        {timezones.map((timezone) => (
          <MenuItem key={timezone} value={timezone}>
            {timezone}
          </MenuItem>
        ))}
      </Select>
    </FormLayout>
  );
};

export default TimezoneStep;
