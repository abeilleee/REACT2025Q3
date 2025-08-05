import { useCallback, useEffect, useState, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardsList, Search, FlyoutPanel } from '@/components';
import { usePokemon } from '@/hooks';
import { INITIAL_PAGE } from '@/services/api/constants';

const getCurrentPage = (searchParams: URLSearchParams) => {
  return Number(searchParams.get('page') || INITIAL_PAGE);
};

const MainPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(() => getCurrentPage(searchParams));
  const { data, isLoading, error, setSearchTerm, total } = usePokemon(page);

  useEffect(() => {
    setPage(getCurrentPage(searchParams));
  }, [searchParams]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
    },
    [setSearchTerm]
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ page: String(newPage) });
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <CardsList
        pokemonsData={data}
        isLoading={isLoading}
        errorMessage={error}
        currentPage={page}
        handlePageChange={handlePageChange}
        total={total}
      />
      <FlyoutPanel />
    </>
  );
};

export default MainPage;
