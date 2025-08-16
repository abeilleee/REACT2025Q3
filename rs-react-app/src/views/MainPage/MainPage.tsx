'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';
import { CardsList, Search, FlyoutPanel, Button } from '@/components';
import { useAppDispatch, useLocalStorage } from '@/hooks';
import { pokemonApi, useGetAllPokemonDataQuery } from '@/store/slices/pokemon';
import { INITIAL_PAGE, STORAGE_KEY, TAGS } from '@/utils/constants';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('MainPage');
  const [searchTerm, setSearchTerm] = useLocalStorage({
    key: STORAGE_KEY.SEARCH_TERM,
  });
  const [page, setPage] = useState(() =>
    Number(searchParams?.get('page') ?? INITIAL_PAGE)
  );
  const {
    data: pokemonData,
    isFetching: isLoading,
    error,
  } = useGetAllPokemonDataQuery({ page: page, searchTerm: searchTerm.trim() });

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('page', String(newPage));
    const newUrl = `?${params.toString()}`;
    router.push(newUrl);
    setPage(newPage);
  };

  const invalidateCache = () => {
    dispatch(pokemonApi.util.invalidateTags([{ type: TAGS.POKEMON_DATA }]));
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
      <Button textContent={t('refresh')} onClick={invalidateCache} />
    </>
  );
};

export default MainPage;
