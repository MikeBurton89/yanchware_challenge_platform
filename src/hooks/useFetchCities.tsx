import { useQuery } from '@tanstack/react-query';
import { City } from '../types';
import getCities from '../api/getCities';
import { useCitiesStore } from '../zustand/CitiesStore';

export default function useFetchCities() {
  try {
    const {cities, addCities } = useCitiesStore();
    console.log("🚀 ~ cities:", cities)
    const { data, isLoading, error } = useQuery<City[]>({
      queryKey: ['cities'],
      queryFn: async () => {
        const response = await getCities();
        addCities(response);
        console.log("🚀 ~ cities:", cities)
        return response;
      },
    });
    return { data, isLoading, error };
  } catch (e) {
    console.log(e);
    throw e;
  }
}
