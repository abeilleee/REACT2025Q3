import { isSortVariant } from '@/features/table-controllers/lib';
import { SORT_ORDER, SORT_VARIANTS } from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';
import { Select } from '@/shared/ui';
import { SortOrder } from './sort-order';

export const SortVariant = () => {
  const { setSortVariant, setSortOrder } = useCountriesStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (isSortVariant(value)) {
      setSortVariant(value);
      return;
    }

    setSortVariant(SORT_VARIANTS.NONE);
    setSortOrder(SORT_ORDER.NONE);
  };

  return (
    <div className="flex gap-3.5">
      <Select
        label="Sort by:"
        id="sort"
        options={Object.values(SORT_VARIANTS)}
        onChange={handleChange}
      />
      <SortOrder />
    </div>
  );
};
