import { create } from 'zustand';

interface YearStore {
  allYears: number[];
  selectedYear: number | null;
  setAllYears: (years: number[]) => void;
  setSelectedYear: (value: number) => void;
}

export const useYearsStore = create<YearStore>((set) => ({
  allYears: [],
  selectedYear: null,
  setSelectedYear: (value: number | null) => {
    set(() => ({
      selectedYear: value,
    }));
  },
  setAllYears: (value: number[]) => {
    set(() => ({
      allYears: value,
    }));
  },
}));
