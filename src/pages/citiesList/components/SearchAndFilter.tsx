import { Button, Card, CardContent, CardHeader, FormControl, Input, Stack } from '@mui/material';
import { Form } from 'react-router-dom';
import { useSearchParamsAsState } from '../../../hooks/useSearchParamsAsState';
import InternetSpeedSlider from '../../../components/InternetSpeedSlider';
import AvgTempToggles from '../../../components/AvgTempToggles';
import TimezonesSelect from '../../../components/TimezonesSelect';

const SearchAndFilter = () => {
  const { searchParams, handleAddParams, resetParams } = useSearchParamsAsState();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleAddParams('q', e.target.value);
  };

  return (
    <Card sx={{ width: { xs: '100%', md: '100%' } }}>
      <CardHeader title="Search and Filter" subheader="Filter the cities list" />
      <CardContent>
        <FormControl fullWidth>
          <Form>
            <Stack
              direction={{ sm: 'column', lg: 'row' }}
              justifyContent="space-evenly"
              alignItems={{ sm: 'center', md: 'start' }}
              spacing={5}
              padding={2}
            >
              <Input
                fullWidth
                placeholder="Search"
                value={searchParams.get('q')}
                onChange={handleSearch}
              />
              <AvgTempToggles />
              <TimezonesSelect />
              <InternetSpeedSlider />
              <Button onClick={resetParams}>Reset</Button>
            </Stack>
          </Form>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default SearchAndFilter;
