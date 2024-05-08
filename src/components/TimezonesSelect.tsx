import { Box, MenuItem, Select } from '@mui/material';

import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';
import { timezones } from '../utils/constants';

const TimezonesSelect = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();

  return (
    <Box sx={{ minWidth: 120 }}>
    <Select fullWidth
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
  </Box>
  );
};

export default TimezonesSelect;
