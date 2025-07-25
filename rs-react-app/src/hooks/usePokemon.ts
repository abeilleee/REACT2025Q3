import { useCallback, useEffect, useState } from 'react';
import { pokeApi } from '@/services';
import { INITIAL_PAGE } from '@/services/api/constants';
import { useFetch } from './useFetch';
import { useLocalStorage } from './useLocalStorage';

export const usePokemon = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(INITIAL_PAGE);

  const fetchFn = useCallback(async () => {
    if (!searchTerm) {
      const pokemonList = await pokeApi.getPokemonResults(page);

      if (!pokemonList) {
        throw new Error('Error while getting pokemonList');
      }

      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon: { name: string }) => {
          return await pokeApi.getPokemonData(pokemon.name);
        })
      );

      const pokemonCount = await pokeApi.getPokemonCount();
      setTotal(pokemonCount || 0);

      if (pokemonData.every((item) => item !== undefined)) {
        return pokemonData;
      } else {
        throw new Error('Error while getting pokemon data');
      }
    } else {
      const response = await pokeApi.getPokemonData(searchTerm.trim());

      if (!response) {
        throw new Error('Error while getting pokemon');
      }

      return [response];
    }
  }, [searchTerm, page]);

  const { data, isLoading, error, request } = useFetch({
    fetchFn,
  });

  useEffect(() => {
    request();
  }, [fetchFn, request, page]);

  return {
    data,
    isLoading,
    error,
    setSearchTerm,
    total,
    setPage,
    page,
  };
};
