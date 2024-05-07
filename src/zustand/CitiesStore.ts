import { create } from 'zustand';
import { City, CityDetail } from '../types';

export type CitiesStoreType = {
  cities: City[];
  citiesDetails: CityDetail[];
  addCities: (cities: City[]) => void;
  addCity: (city: City) => void;
  removeCity: (cityId: string) => void;
  updateCities: (cities: City[]) => void;
  clearCities: () => void;
};

// Create a store
export const useCitiesStore = create<CitiesStoreType>((set) => ({
  cities: [],
  citiesDetails: [],
  updateCities: (cities: City[]) => set({ cities }),
  addCities: (cities: City[]) =>
    set((state) => ({
      cities: [
        ...state.cities,
        ...cities.filter((c) => !state.cities.some((sc) => sc.cityId === c.cityId)),
      ],
    })),
  addCitiesDetails: (citiesDetails: CityDetail[]) => {
    set((state) => ({
      citiesDetails: [
        ...state.citiesDetails,
        ...citiesDetails.filter(
          (cd) => !state.citiesDetails.some((scd) => scd.cityId === cd.cityId)
        ),
      ],
    }));
  },
  addCityDetails: (cityDetail: CityDetail) => {
    set((state) => ({
      citiesDetails: !state.citiesDetails.some((cd) => cd.cityId === cityDetail.cityId)
        ? [...state.citiesDetails, cityDetail]
        : [...state.citiesDetails],
    }));
  },
  addCity: (city: City) =>
    set((state) => ({
      cities: !state.cities.some((c) => c.cityId === city.cityId)
        ? [...state.cities, city]
        : [...state.cities],
    })),
  removeCity: (cityId: string) =>
    set((state) => ({
      cities: state.cities.filter((c) => c.cityId !== cityId),
    })),
  clearCities: () =>
    set(() => ({
      cities: [],
    })),
}));
