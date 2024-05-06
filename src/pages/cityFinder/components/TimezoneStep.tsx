import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

import { timezones } from '../../../utils/constants';
import { useSearchParams } from 'react-router-dom';

const TimezoneStep = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: SelectChangeEvent<URLSearchParams>) => {
    setSearchParams(event.target.value as string);
  };
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h5" color="#0788d9" gutterBottom>
          Please select your timezone
        </Typography>
      </Grid>
      <Grid item width={'100%'}>
        <FormControl>
          <InputLabel id="timezone-select-label">Timezone</InputLabel>
          <Select
            sx={{ width: '100%' }}
            labelId="timezone-select-label"
            id="timezone-select"
            value={searchParams}
            placeholder="Select a timezone"
            label="Timezone"
            onChange={(e) => handleChange(e)}
          >
            {timezones.map((timezone) => (
              <MenuItem key={timezone} value={timezone}>
                {timezone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TimezoneStep;
