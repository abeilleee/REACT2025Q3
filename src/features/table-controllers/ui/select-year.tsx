import { type FC } from 'react';
import { useYearsStore } from '@/features/table-controllers/model';
import { lastYear } from '@/shared/lib';

export const SelectYear: FC = () => {
  const { allYears, setSelectedYear, selectedYear } = useYearsStore();
  const limitedYears = allYears.slice(0, 5000);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = Number(event.target.value);
    setSelectedYear(year);
  };

  return (
    <div>
      <label htmlFor="year-select">Choose year:</label>
      <select
        id="year-select"
        value={selectedYear || ''}
        onChange={handleChange}
        className="hover:cursor-pointer"
      >
        <option>{lastYear}</option>
        {limitedYears.map((year, idx) => (
          <option key={idx} value={year} defaultValue={lastYear}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
