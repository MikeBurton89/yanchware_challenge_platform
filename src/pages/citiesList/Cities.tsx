import { Stack, Typography } from '@mui/material';
import InnerLayout from '../../components/InnerLayout';
import useFetchCities from '../../hooks/useFetchCities';
import CityList from './components/CityList';
import SearchAndFilter from './components/SearchAndFilter';
import CitiesTitleSection from './components/TitleSection';

const Cities = () => {
  const { isLoading, error } = useFetchCities();
  return (
    <InnerLayout header={<CitiesTitleSection />}>
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
