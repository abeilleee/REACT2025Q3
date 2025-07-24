import { useCallback, type FC } from 'react';
import { CardsLayout, Search } from '@/components';
import { usePokemon } from '@/hooks/usePokemon';

export const MainPage: FC = () => {
  const { data, isLoading, error, setSearchTerm } = usePokemon();

  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
    },
    [setSearchTerm]
  );

  return (
    <>
      <Search onSearch={handleSearch} />
      <CardsLayout
        pokemonsData={data}
        isLoading={isLoading}
        errorMessage={error}
      ></CardsLayout>
    </>
  );
};
