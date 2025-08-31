import { type FC } from 'react';
import { useYearsStore } from '@/features/table-controllers/model';
import { lastYear } from '@/shared/lib';
import { Select } from '@/shared/ui/select';

export const SelectYear: FC = () => {
  const { allYears, setSelectedYear, selectedYear } = useYearsStore();
  const limitedYears = allYears.slice(0, 5000);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = Number(event.target.value);
    setSelectedYear(year);
  };

  return (
    <Select
      label="Choose year:"
      id="year-select"
      options={limitedYears}
      onChange={handleChange}
      value={selectedYear || lastYear}
    />
  );
};
