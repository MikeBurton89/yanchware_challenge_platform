import { IconButton, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CityIcon, BackIcon } from '../../../components/icons';
import { useCitiesStore } from '../../../zustand/CitiesStore';
import { useFavouriteCities } from '../../../zustand/FavouriteCities';

type CityDetailsHeaderProps = {
  cityName: string | undefined;
  cityId: string;
};
const CityDetailsHeader = ({ cityName, cityId }: CityDetailsHeaderProps) => {
  const { selectedCities, toggleCity } = useFavouriteCities();
  const navigate = useNavigate();
  const { cities } = useCitiesStore();
  const isCityInFav = selectedCities.some((city) => city.cityId === cityId);
  const cityToSave = cities.find((city) => city.cityId === cityId);

  const handleAddToFav = () => {
    if (!cityToSave) return;
    toggleCity(cityToSave);
  };

  const handleGoToCityList = () => {
    navigate('/cities');
  };
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton onClick={handleGoToCityList}>
        <BackIcon color= '#0788d9' />
      </IconButton>
      <Typography color="#0788d9" variant="h3">
        {cityName}
      </Typography>
      {cityName && (
        <IconButton onClick={handleAddToFav}>
          <CityIcon color={isCityInFav ? '#0788d9' : 'black'} />
        </IconButton>
      )}
    </Stack>
  );
};

export default CityDetailsHeader;
