import { isSortOrder } from '@/features/table-controllers/lib';
import { SORT_ORDER, SORT_VARIANTS } from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';
import { Select } from '@/shared/ui';

export const SortOrder = () => {
  const { sortVariant, setSortOrder } = useCountriesStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (isSortOrder(value)) {
      setSortOrder(value);
    }

    return;
  };

  const isVisible = sortVariant && sortVariant !== SORT_VARIANTS.NONE;

  return (
    isVisible && (
      <Select
        label="Sort by:"
        id="sort"
        options={Object.values(SORT_ORDER)}
        onChange={handleChange}
      />
    )
  );
};
