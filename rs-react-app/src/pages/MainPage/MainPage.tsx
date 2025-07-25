import { useCallback, type FC } from 'react';
import { CardsLayout, Search } from '@/components';
import { usePokemon } from '@/hooks/usePokemon';
import { INITIAL_PAGE } from '@/services/api/constants';

export const MainPage: FC = () => {
  const { data, isLoading, error, setSearchTerm, total, setPage, page } =
    usePokemon();

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
      setPage(INITIAL_PAGE);
    },
    [setSearchTerm, setPage]
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <CardsLayout
        pokemonsData={data}
        isLoading={isLoading}
        errorMessage={error}
        currentPage={page}
        handlePageChange={handlePageChange}
        total={total}
      ></CardsLayout>
    </>
  );
};
