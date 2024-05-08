import mockedCityDetails from '../mocks/mockedCityDetails.json';
export default async function getDetailsForFilter(cityId: string): Promise<{
  averageTemperature: number;
  internetSpeed: number;
  timezone: string;
}> {
  return new Promise((resolve, reject) => {
    try{
      setTimeout(() => {
        const cityDetail = mockedCityDetails.find((cityDetail) => cityDetail.cityId === cityId);
        if (!cityDetail) {
          // return default values
          resolve({
            averageTemperature: 0,
            internetSpeed: 0,
            timezone: "",
          });
        }
    
        resolve({
          averageTemperature: cityDetail?.climate.averageTemperature ?? 0,
          internetSpeed: cityDetail?.internetSpeed.download ?? 0,
          timezone: cityDetail?.timezone ?? '',
        });
      }, 1000);
    }catch(e){
      reject(e);
    }

  });
}
