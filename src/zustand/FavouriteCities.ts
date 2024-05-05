import { createStore } from 'zustand';
import { City } from '../types';


export type FavouriteCitiesStore = {
  selectedCities: City[];
  addCityToFav: (city: City) => void;
  removeCityFromFav: (cityId: string) => void;
};


export const FavouriteCities = createStore<FavouriteCitiesStore>((set) => ({
  selectedCities: [],
  addCityToFav: (city: City) =>
    set((state) => ({
      selectedCities: [...state.selectedCities, city],
    })),
  removeCityFromFav: (cityId: string) =>
    set((state) => ({
      selectedCities: state.selectedCities.filter((c) => c.cityId !== cityId),
    })),
}));
