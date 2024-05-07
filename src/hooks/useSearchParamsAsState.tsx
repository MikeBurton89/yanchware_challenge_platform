import { useSearchParams } from 'react-router-dom';

export const useSearchParamsAsState = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    timezone: '',
    avgTemp: '',
    internetSpeed: '',
  });
  const serializeFormQuery = (value: string) => {
    const serializedValue = encodeURIComponent(value);
    return serializedValue;
  };
  const handleAddParams = (key: string, value: string) => {
    setSearchParams({ ...searchParams, [key]: serializeFormQuery(value) });
  };

  return { searchParams, serializeFormQuery, handleAddParams };
};
