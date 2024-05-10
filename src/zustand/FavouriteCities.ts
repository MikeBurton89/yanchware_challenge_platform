import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { City } from '../types';

export type FavouriteCitiesStore = {
  selectedCities: City[];
  addCityToFav: (city: City) => void;
  removeCityFromFav: (cityId: string) => void;
  toggleCity: (city: City) => void;
};

export const useFavouriteCities = create<FavouriteCitiesStore>()(
  persist(
    (set, get) => ({
      selectedCities: [],
      addCityToFav: (city: City) =>
        set((state) => ({
          selectedCities: [...state.selectedCities, city],
        })),
      removeCityFromFav: (cityId: string) =>
        set((state) => ({
          selectedCities: state.selectedCities.filter((c) => c.cityId !== cityId),
        })),
        toggleCity: (city: City) => {
          const isCityInFav = get().selectedCities.some((c) => c.cityId === city.cityId);
          if (isCityInFav) {
            get().removeCityFromFav(city.cityId);
          } else {
            get().addCityToFav(city);
          }
        }
    }),
    {
      name: 'favourite-cities',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
