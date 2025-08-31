import { create } from 'zustand';
import { SORT_ORDER, SORT_VARIANTS, type FlatCo2Data } from '@/shared/lib';

interface CountriesStore {
  countries: FlatCo2Data[];
  sortVariant: SORT_VARIANTS | null;
  sortOrder: SORT_ORDER | null;
}

interface CountriesStoreActions {
  setCountries: (data: FlatCo2Data[]) => void;
  setSortVariant: (value: SORT_VARIANTS) => void;
  setSortOrder: (value: SORT_ORDER) => void;
}

export const useCountriesStore = create<CountriesStore & CountriesStoreActions>(
  (set) => ({
    countries: [],
    sortVariant: null,
    sortOrder: null,

    setCountries: (data: FlatCo2Data[]) => {
      set(() => ({
        countries: data,
      }));
    },

    setSortVariant: (value: SORT_VARIANTS) => {
      set(() => ({
        sortVariant: value,
      }));
    },

    setSortOrder: (value: SORT_ORDER) => {
      set(() => ({
        sortOrder: value,
      }));
    },
  })
);
