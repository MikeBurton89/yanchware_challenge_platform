export type City = {
  cityId: string;
  cityName: string;
  country: string;
};

export type CityDetail = {
  cityId: string;
  cityName: string;
  country: string;
  population: number;
  timezone: string;
  currency: string;
  language: string;
  costOfLivingIndex: number;
  internetSpeed: {
    download: number;
    upload: number;
  };
  coworkingSpaces: coworkingSpace[];
  safetyIndex: number;
  climate: {
    averageTemperature: number;
    rainfall: number;
  };
};

type coworkingSpace = {
  name: string;
  address: string;
  rating: number;
};
