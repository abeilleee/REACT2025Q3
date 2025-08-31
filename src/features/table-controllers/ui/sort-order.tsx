import { isSortOrder } from '@/features/table-controllers/lib';
import { SORT_ORDER, SORT_VARIANTS } from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';

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
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={handleChange}>
          {Object.values(SORT_ORDER).map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    )
  );
};
