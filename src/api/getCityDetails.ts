import mockedCityDetails from '../mocks/mockedCityDetails.json';
import { CityDetail } from '../types';
export default function getCityDetails(cityId: string): Promise<CityDetail> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cityDetail = mockedCityDetails.find(
        (cityDetail: CityDetail) => cityDetail.cityId === cityId
      );
      if (!cityDetail) throw new Error('City not found');
      resolve(cityDetail);
    }, 1000);
  });
}
