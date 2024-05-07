import { useSearchParams } from 'react-router-dom';

export const useSearchParamsAsState = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serializeFormQuery = (value: string) => {
    const serializedValue = encodeURIComponent(value);
    return serializedValue;
  };

  const resetParams = () => {
    setSearchParams((prev) => {
      prev.delete('q');
      prev.delete('avgTemperature');
      prev.delete('timezone');
      prev.delete('internetSpeed');
      return prev;
    });
  }

  const handleAddParams = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };


  return { searchParams, serializeFormQuery, handleAddParams, resetParams };
};
