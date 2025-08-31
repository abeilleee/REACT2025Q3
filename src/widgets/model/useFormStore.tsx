import { create } from 'zustand';
import { TABLE_HEADERS_DEFAULT, TABLE_HEADERS_OPTIONAL } from '@/widgets/lib';

interface FormStore {
  selectedColumns: Partial<TABLE_HEADERS_OPTIONAL | TABLE_HEADERS_DEFAULT>[];
  toggleColumn: (column: TABLE_HEADERS_OPTIONAL) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  selectedColumns: Object.values(TABLE_HEADERS_DEFAULT),

  toggleColumn: (column: TABLE_HEADERS_OPTIONAL | TABLE_HEADERS_DEFAULT) => {
    set((state) => {
      const isSelected = state.selectedColumns.includes(column);

      if (isSelected) {
        return {
          selectedColumns: state.selectedColumns.filter(
            (col) => col !== column
          ),
        };
      } else {
        return {
          selectedColumns: [...state.selectedColumns, column],
        };
      }
    });
  },
}));
