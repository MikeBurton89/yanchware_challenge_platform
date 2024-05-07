import { MenuItem, Select } from '@mui/material';

import { timezones } from '../utils/constants';
import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';

const TimezonesSelect = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();

  return (
    <Select
      size="small"
      variant='standard'
      id="timezone_select"
      placeholder="Select a timezone"
      value={searchParams.get('timezone') || ''}
      onChange={(e) => handleAddParams('timezone', e.target.value as string)}
    >
      {timezones.map((timezone) => (
        <MenuItem key={timezone} value={timezone}>
          {timezone}
        </MenuItem>
      ))}
    </Select>
  );
};

export default TimezonesSelect;
