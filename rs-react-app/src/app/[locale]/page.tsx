import { getParams } from '@/utils/getParams';
import MainPage from '@/views/MainPage/MainPage';
import { fetchData } from '@/app/api/fetchData';

type PageProps = {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const { searchTerm, currentPage } = getParams(params);
  const data = await fetchData(searchTerm, currentPage);

  return (
    <MainPage
      searchTerm={searchTerm}
      fetchData={data}
      currentPage={currentPage}
    />
  );
}
