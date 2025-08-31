import clsx from 'clsx';
import { useEffect, useState, type FC } from 'react';
import { useYearsStore } from '@/features/table-controllers';
import { type CountryData } from '@/shared/lib';
import { getTableDataValue, NOT_HIGLIGHTED_COLUMNS } from '@/widgets/lib';
import { useFormStore } from '@/widgets/model';

type TableProps = {
  countryData: CountryData[] | undefined;
};

export const Table: FC<TableProps> = ({ countryData }) => {
  const { selectedColumns: headers } = useFormStore();
  const { selectedYear } = useYearsStore();
  const [isUpdated, setIsUpdated] = useState(false);

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
      <table className="w-full">
        <thead>
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
                      'text-indigo-500': isHiglighted && isUpdated,
                    })}
                    key={headerIdx}
                  >
                    {value}{' '}
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
