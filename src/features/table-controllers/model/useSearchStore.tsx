import { create } from 'zustand';

interface SearchStore {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (value: string) => {
    set(() => ({
      searchTerm: value,
    }));
  },
}));
