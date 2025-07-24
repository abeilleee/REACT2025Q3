import { useCallback, useEffect } from 'react';
import { pokeApi } from '@/services';
import { useFetch } from './useFetch';
import { useLocalStorage } from './useLocalStorage';

export const usePokemon = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage();

  const fetchFn = useCallback(async () => {
    if (!searchTerm) {
      const pokemonList = await pokeApi.getPokemonResults();

      if (!pokemonList) {
        throw new Error('Error while getting pokemonList');
      }

      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon: { name: string }) => {
          return await pokeApi.getPokemonData(pokemon.name);
        })
      );

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
  }, [searchTerm]);

  const { data, isLoading, error, request } = useFetch({
    fetchFn,
  });

  useEffect(() => {
    request();
  }, [fetchFn, request]);

  return { data, isLoading, error, setSearchTerm };
};
