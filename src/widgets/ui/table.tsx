import clsx from 'clsx';
import { useEffect, useMemo, useState, type FC } from 'react';
import { useYearsStore } from '@/features/table-controllers';
import { useFilteredData } from '@/features/table-controllers/lib';
import { useSearchStore } from '@/features/table-controllers/model';
import {
  lastYear,
  mapCo2DataToCountryData,
  SORT_ORDER,
  SORT_VARIANTS,
  type FilterState,
} from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';
import { getTableDataValue, NOT_HIGLIGHTED_COLUMNS } from '@/widgets/lib';
import { useFormStore } from '@/widgets/model';

export const Table: FC = () => {
  const { selectedColumns: headers } = useFormStore();
  const { selectedYear } = useYearsStore();
  const { searchTerm } = useSearchStore();
  const [isUpdated, setIsUpdated] = useState(false);
  const { sortVariant, sortOrder } = useCountriesStore();

  const filterOptions = useMemo<FilterState>(
    () => ({
      sortVariant: sortVariant ?? SORT_VARIANTS.NONE,
      sortOrder: sortOrder ?? SORT_ORDER.NONE,
    }),
    [sortVariant, sortOrder]
  );

  const { filteredData } = useFilteredData(filterOptions, searchTerm);

  const countryData = useMemo(
    () => mapCo2DataToCountryData(filteredData, selectedYear ?? lastYear),
    [filteredData, selectedYear]
  );

  useEffect(() => {
    if (selectedYear) {
      setIsUpdated(true);

      const timerId = setTimeout(() => {
        setIsUpdated(false);
      }, 2000);

      return () => clearTimeout(timerId);
    }
  }, [selectedYear]);

  return (
    countryData && (
      <table className="w-full table-auto">
        <thead className="sticky top-[52px] bg-blue-950">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="font-extrabold">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {countryData.map((country, idx) => (
            <tr key={idx}>
              {headers.map((header, headerIdx) => {
                const value = getTableDataValue(country, header);
                const isHiglighted = headerIdx >= NOT_HIGLIGHTED_COLUMNS;

                return (
                  <td
                    className={clsx({
                      'bg-sky-300': isHiglighted && isUpdated,
                    })}
                    key={headerIdx}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};
