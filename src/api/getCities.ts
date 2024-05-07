import mockedCities from '../mocks/mockedCities.json';
import { City } from '../types';
import { getDetailsForFilter } from './getDetailsForFilter';

export default async function getCities(): Promise<City[]> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    // using getDetailsForFilter to get the details for each city
    const mockedCitiesWithDetails = await Promise.all(mockedCities.map(async (city) => {
      const details = await getDetailsForFilter(city.cityId);
      return { ...city, ...details };
    }));
    setTimeout(() => {
      resolve(mockedCitiesWithDetails as City[]);
    }, 1000);
  });
}
