import { Grid } from '@mui/material';
import { CityIcon } from '../../../components/icons';
import CityCard from './CityCard';
import { useNavigate } from 'react-router-dom';
import useFilterCities from '../../../hooks/useFilterCities';

const CityList = () => {
  const cities = useFilterCities();
  const navigate = useNavigate();
  return (
    <Grid justifyContent="center" container columns={1} spacing={1}>
      {cities &&
        cities?.map((city) => (
          <CityCard
            icon={<CityIcon size="5rem" />}
            key={city?.cityId || 'city'}
            name={city?.cityName || 'City'}
            onClick={() => navigate(`/city/${city.cityId}`)}
          />
        ))}
    </Grid>
  );
};

export default CityList;
