import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,

  toggleIsOpen: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
}));
