import { create } from 'zustand';
import type { FlatCo2Data } from '@/shared/lib';

interface CountriesStore {
  countries: FlatCo2Data[];
  setCountries: (data: FlatCo2Data[]) => void;
}

export const useCountriesStore = create<CountriesStore>((set) => ({
  countries: [],

  setCountries: (data: FlatCo2Data[]) => {
    set(() => ({
      countries: data,
    }));
  },
}));
