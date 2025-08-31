import { isSortVariant } from '@/features/table-controllers/lib';
import { SORT_ORDER, SORT_VARIANTS } from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';
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
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          onChange={handleChange}
          className="hover:cursor-pointer"
        >
          {Object.values(SORT_VARIANTS).map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <SortOrder />
    </div>
  );
};
