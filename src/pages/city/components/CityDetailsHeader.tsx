import { IconButton, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { CityIcon } from '../../../components/icons';
import { CityDetail } from '../../../types';
import { useCitiesStore } from '../../../zustand/CitiesStore';
import { useFavouriteCities } from '../../../zustand/FavouriteCities';

type CityDetailsHeaderProps = {
  cityName: CityDetail['cityName'] | undefined;
};
const CityDetailsHeader = ({ cityName }: CityDetailsHeaderProps) => {
  const { cityId } = useParams<{ cityId: string }>();
  const { selectedCities, addCityToFav, removeCityFromFav } = useFavouriteCities();
  const { cities } = useCitiesStore();
  const isCityInFav = selectedCities.some((city) => city.cityId === cityId);
  console.log("🚀 ~ CityDetailsHeader ~ isCityInFav:", isCityInFav)
  const cityToSave = cities.find((city) => city.cityId === cityId);
  console.log("🚀 ~ CityDetailsHeader ~ cityToSave:", cityToSave)

  const handleAddToFav = () => {
    if (!cityToSave) return;
    if (!isCityInFav) {
      addCityToFav(cityToSave);
    }
    if (isCityInFav) {
      removeCityFromFav(cityToSave.cityId);
    }
  };
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Typography color="#0788d9" variant="h3">
        {cityName}
      </Typography>
      <IconButton onClick={handleAddToFav}>
        <CityIcon color={isCityInFav ? '#0788d9' : 'black'} />
      </IconButton>
    </Stack>
  );
};

export default CityDetailsHeader;
