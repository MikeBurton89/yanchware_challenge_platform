import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';

import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';
import { timezones } from '../utils/constants';

const TimezonesSelect = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();

  const handleTimezoneChange = (e: SelectChangeEvent) => {
    const isValueInTimezones = timezones.includes(e.target.value as string);
    if (isValueInTimezones) handleAddParams('timezone', e.target.value as string);
    else handleAddParams('timezone', '');
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select
        fullWidth
        size="small"
        variant="standard"
        id="timezone_select"
        placeholder="Select a timezone"
        value={searchParams.get('timezone') || ''}
        onChange={handleTimezoneChange}
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
