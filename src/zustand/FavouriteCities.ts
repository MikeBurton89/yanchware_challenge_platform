import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { City } from '../types';

export type FavouriteCitiesStore = {
  selectedCities: City[];
  addCityToFav: (city: City) => void;
  removeCityFromFav: (cityId: string) => void;
};

export const useFavouriteCities = create<FavouriteCitiesStore>()(
  persist(
    (set) => ({
      selectedCities: [],
      addCityToFav: (city: City) =>
        set((state) => ({
          selectedCities: [...state.selectedCities, city],
        })),
      removeCityFromFav: (cityId: string) =>
        set((state) => ({
          selectedCities: state.selectedCities.filter((c) => c.cityId !== cityId),
        })),
    }),
    {
      name: 'favourite-cities',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
