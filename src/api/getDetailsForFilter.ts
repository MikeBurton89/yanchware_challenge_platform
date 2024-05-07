import mockedCityDetails from '../mocks/mockedCityDetails.json';
export async function getDetailsForFilter(cityId: string): Promise<{
  averageTemperature: number;
  internetSpeed: number;
  timezone: string;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cityDetail = mockedCityDetails.find((cityDetail) => cityDetail.cityId === cityId);
      if (!cityDetail) throw new Error('City not found');
      const filterDetails = {
        averageTemperature: cityDetail.climate.averageTemperature,
        internetSpeed: cityDetail.internetSpeed.download,
        timezone: cityDetail.timezone,
      };
      console.log("🚀 ~ setTimeout ~ filterDetails:", filterDetails)
      resolve(filterDetails);
    }, 1000);
  });
}
