import { fetchData } from '@/app/api/fetchData';
import { DetailedCard, MainLayout } from '@/components';
import { getParams } from '@/utils/getParams';

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
    <MainLayout
      searchTerm={searchTerm}
      currentPage={currentPage}
      fetchData={data}
    >
      <DetailedCard />
    </MainLayout>
  );
}
