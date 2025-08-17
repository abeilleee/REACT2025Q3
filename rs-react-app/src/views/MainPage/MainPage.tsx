import { ReturnedData } from '@/app/api/fetchData';
import { CardsList, Search, FlyoutPanel } from '@/components';

type MainPageProps = {
  searchTerm: string;
  currentPage: number;
  fetchData: ReturnedData;
};

export function MainPage({
  searchTerm,
  currentPage,
  fetchData,
}: MainPageProps) {
  return (
    <>
      <Search searchTerm={searchTerm} />
      <CardsList fetchData={fetchData} currentPage={currentPage} />
      <FlyoutPanel />
    </>
  );
}

export default MainPage;
