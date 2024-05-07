import { useMemo } from 'react';
import { useCitiesStore } from '../zustand/CitiesStore';
import { useSearchParamsAsState } from './useSearchParamsAsState';

const useFilterCities = () => {
  const { searchParams } = useSearchParamsAsState();
  const { cities } = useCitiesStore();

  const filteredCities = useMemo(()=>{
    const newCities = cities.filter((city) => {
        const searchString = searchParams.get('q') || '';
        const internetSpeed = parseInt(searchParams.get('internetSpeed') || '0');
        const avgTemperature = searchParams.get('avgTemperature');
        const timezone = searchParams.get('timezone');
        const cityInternetSpeed = city?.internetSpeed ?? 0;
        const cityTimezone = city?.timezone ?? '';
        const cityAvgTemperature = city?.averageTemperature ?? 0;
        return (
          cityInternetSpeed >= internetSpeed &&
          cityAvgTemperature >= parseInt(avgTemperature ?? '0') &&
          city.cityName.toLowerCase().includes(searchString.toLowerCase()) &&
            cityTimezone.includes(timezone ?? '')
        );
      });
        return newCities;
  }, [cities, searchParams]); 
  return filteredCities;
};

export default useFilterCities;
