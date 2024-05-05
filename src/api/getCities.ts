import mockedCities from '../mocks/mockedCities.json';
import { City } from '../types';
export default function getCities(): Promise<City[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedCities as City[]);
    }, 1000);
  });
}
