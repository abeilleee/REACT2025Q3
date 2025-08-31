import { useMemo } from 'react';
import { SORT_ORDER, SORT_VARIANTS, type FilterState } from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';

export const useFilteredData = (filterState: FilterState) => {
  const { countries } = useCountriesStore();

  const sortedData = useMemo(() => {
    const countriesCopy = [...countries];

    switch (filterState.sortVariant) {
      case SORT_VARIANTS.NAME:
        return countriesCopy.sort((a, b) => {
          const result = a.country.localeCompare(b.country);

          if (filterState.sortOrder === SORT_ORDER.ASC) {
            return result;
          } else if (filterState.sortOrder === SORT_ORDER.DESC) {
            return -result;
          }
          return 0;
        });

      case SORT_VARIANTS.POPULATION:
        return countriesCopy.sort((a, b) => {
          const resultA = Number(a.data.at(-1)?.population ?? 0);
          const resultB = Number(b.data.at(-1)?.population ?? 0);

          if (filterState.sortOrder === SORT_ORDER.ASC) {
            return resultA - resultB;
          } else if (filterState.sortOrder === SORT_ORDER.DESC) {
            return resultB - resultA;
          }
          return 0;
        });

      case SORT_VARIANTS.NONE:
      default:
        return countriesCopy;
    }
  }, [countries, filterState.sortVariant, filterState.sortOrder]);

  return { filteredData: sortedData };
};
