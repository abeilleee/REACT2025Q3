import { fetchData } from '@/app/api/fetchData';
import { INITIAL_PAGE } from '@/utils/constants';
import MainPage from '@/views/MainPage/MainPage';

type PageProps = {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const searchTerm = params.searchTerm ?? '';
  const currentPage = params.page ? +params.page : INITIAL_PAGE;
  const data = await fetchData(searchTerm, currentPage);

  return (
    <MainPage
      searchTerm={searchTerm}
      fetchData={data}
      currentPage={currentPage}
    />
  );
}
