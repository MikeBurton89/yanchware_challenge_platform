import mockedCityDetails from '../mocks/mockedCityDetails.json';
import { CityDetail } from '../types';

export default function getCityDetails(cityId: string): Promise<CityDetail> {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const cityDetail = mockedCityDetails.find(
          (cityDetail: CityDetail) => cityDetail.cityId === cityId
        );
        if (!cityDetail) {
          reject(new Error('No City Id found'));
        } else {
          resolve(cityDetail);
        }
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
