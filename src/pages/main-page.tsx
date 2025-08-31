import { useEffect, useMemo, type FC } from 'react';
import {
  ColumnsList,
  Controllers,
  useYearsStore,
} from '@/features/table-controllers';
import { getDataResult } from '@/shared/api';
import { getAllYears, mapCo2DataToFlatCo2Data } from '@/shared/lib';
import { useCountriesStore } from '@/shared/model';
import { Modal, Table } from '@/widgets/ui';

export const MainPage: FC = () => {
  const { setAllYears } = useYearsStore();
  const { setCountries } = useCountriesStore();
  const co2Data = getDataResult.read();

  const flatData = useMemo(() => {
    return mapCo2DataToFlatCo2Data(co2Data);
  }, [co2Data]);

  const years = useMemo(() => {
    return getAllYears(flatData);
  }, [flatData]);

  useEffect(() => {
    setCountries(mapCo2DataToFlatCo2Data(co2Data));
    setAllYears(years);
  }, [flatData, setCountries, co2Data, setAllYears, years]);

  return (
    <>
      <Controllers />
      <Modal children={<ColumnsList />} />
      <Table />
    </>
  );
};
