import { useQuery } from '@tanstack/react-query';
import getCityDetails from '../api/getCityDetails';

const useFetchCityDetails = ({ cityId }: { cityId: string | undefined }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cityDetails', cityId],
    queryFn: () => {
      const response = getCityDetails(cityId);
      return response;
    },
  });
  return { data, isLoading, error };
};

export default useFetchCityDetails;
