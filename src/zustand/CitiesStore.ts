import { createStore } from 'zustand';
import { City } from '../types';

// Define the type of the store
export type CitiesStoreType = {
  cities: City[];
  addCities: (cities: City[]) => void;
  addCity: (city: City) => void;
  removeCity: (cityId: string) => void;
  clearCities: () => void;
};

// Create a store
export const CitiesStore = createStore<CitiesStoreType>((set) => ({
  cities: [],
  addCities: (cities: City[]) =>
    set((state) => ({
      cities: [...state.cities, ...cities],
    })),
  addCity: (city: City) =>
    set((state) => ({
      cities: [...state.cities, city],
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
