import type { CountryData } from '@/shared/lib';
import { getTableDataValue } from '@/widgets/lib';
import { useFormStore } from '@/widgets/model';
import type { FC } from 'react';

type TableProps = {
  countryData: CountryData[] | undefined;
};

export const Table: FC<TableProps> = ({ countryData }) => {
  const { selectedColumns: headers } = useFormStore();

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
                return <td key={headerIdx}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};
