export type City = {
  cityId: string;
  cityName: string;
  country: string;
  internetSpeed?: number;
  averageTemperature?: number;
  timezone?: string;
};

export type CityDetail = {
  cityId: string;
  cityName: string;
  country: string;
  population: number;
  timezone: string; // UTC
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
    averageTemperature: number; // Celsius
    rainfall: number; // mm
  };
};

type coworkingSpace = {
  name: string;
  address: string;
  rating: number; //double
};

