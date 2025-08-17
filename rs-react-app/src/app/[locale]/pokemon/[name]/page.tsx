import { fetchData } from '@/app/api/fetchData';
import { DetailedCard, MainLayout } from '@/components';
import { INITIAL_PAGE } from '@/utils/constants';

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
    <MainLayout
      searchTerm={searchTerm}
      currentPage={currentPage}
      fetchData={data}
    >
      <DetailedCard />
    </MainLayout>
  );
}
