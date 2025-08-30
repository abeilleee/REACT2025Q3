import { useMemo, type FC } from 'react';
import { Controllers } from '@/features/table-controllers';
import { ColumnsList } from '@/features/table-controllers/ui/columns-list';
import { getDataResult } from '@/shared/api';
import { useFormStore } from '@/widgets/model';
import { Modal } from '@/widgets/ui/modal/modal';
import { Table } from '@/widgets/ui/table/table';

export const MainPage: FC = () => {
  const { selectedColumns } = useFormStore();

  const data = useMemo(() => {
    return getDataResult.read();
  }, [selectedColumns]);

  return (
    <>
      <Controllers />
      <Modal children={<ColumnsList />} />
      <Table countryData={data} />
    </>
  );
};
