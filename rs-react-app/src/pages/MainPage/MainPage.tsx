import { useState, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardsList, Search, FlyoutPanel, Button } from '@/components';
import { useLocalStorage } from '@/hooks';
import { useGetAllPokemonDataQuery } from '@/store/slices/api/pokemonApi';
import { getCurrentPage } from '@/utils';
import { STORAGE_KEY } from '@/utils/constants';

const MainPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useLocalStorage({
    key: STORAGE_KEY.SEARCH_TERM,
  });
  const [page, setPage] = useState(() => getCurrentPage(searchParams));
  const {
    data: pokemonData,
    isFetching: isLoading,
    error,
    refetch,
  } = useGetAllPokemonDataQuery({ page: page, searchTerm: searchTerm.trim() });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ page: String(newPage) });
  };

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardsList
        pokemonsData={pokemonData}
        isLoading={isLoading}
        error={error}
        currentPage={page}
        handlePageChange={handlePageChange}
      />
      <FlyoutPanel />
      <Button textContent="Refetch" onClick={refetch} />
    </>
  );
};

export default MainPage;
