import { useMemo, type FC } from 'react';
import { getDataResult } from '@/shared/api';
import { Table } from '@/widgets/ui/table/table';

export const MainPage: FC = () => {
  const data = useMemo(() => {
    return getDataResult.read();
  }, []);

  return <Table countryData={data} />;
};
