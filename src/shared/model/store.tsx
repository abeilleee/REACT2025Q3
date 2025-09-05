import { create } from 'zustand';
import { countries, type FormValues } from '@/features/lib';

export type StoredData = Omit<FormValues, 'image'> & { image: string };

interface Store {
  controlledData: StoredData[];
  unControlledData: StoredData[];
  countries: string[];
  isOpen: boolean;
}

interface Actions {
  setControlledData: (data: StoredData) => void;
  setUncontrolledData: (data: StoredData) => void;
  toggleIsOpen: () => void;
}

export const useFormStore = create<Store & Actions>((set) => ({
  controlledData: [],
  unControlledData: [],
  countries: countries,
  isOpen: false,

  setControlledData: (data: StoredData) =>
    set((state) => ({
      controlledData: [data, ...state.controlledData],
    })),

  setUncontrolledData: (data: StoredData) =>
    set((state) => ({
      unControlledData: [data, ...state.unControlledData],
    })),

  toggleIsOpen: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
}));
