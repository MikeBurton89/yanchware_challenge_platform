import { Stack, Typography } from '@mui/material';
import InnerLayout from '../../components/InnerLayout';
import SearchAndFilter from './components/SearchAndFilter';
import useFetchCities from '../../hooks/useFetchCities';
import CityList from './components/CityList';


const Cities = () => {

  const { isLoading, error } = useFetchCities();
  return (
    <InnerLayout
      header={
        <>
          <Typography color="#0a57a3" variant="h4" align="center" gutterBottom>
            Here you can search for cities
          </Typography>
          <Typography color="text.secondary" variant="h5" align="center" gutterBottom>
            Filter by name, internet speed, weather and timezone...
          </Typography>
        </>
      }
    >
      <>
        <Stack
          spacing={1}
          width="100%"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <SearchAndFilter />
          {isLoading && <Typography>Loading...</Typography>}
          {error && <Typography>Error: {error.message}</Typography>}
          {!isLoading && !error && <CityList />}
        </Stack>
      </>
    </InnerLayout>
  );
};

export default Cities;
