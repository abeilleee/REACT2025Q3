import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { getOffset, mapDataToPokemonData } from '@/utils';
import { BASE_ENDPOINT, LIMIT } from '@/utils/constants';
import { fetchData } from './helpers';
import type { ApiResponse, Pokemon } from './types';

export type customQueryFnArgs = {
  page: number;
  searchTerm?: string;
};

export const customQueryFn = async ({
  page,
  searchTerm,
}: customQueryFnArgs) => {
  try {
    if (!searchTerm) {
      const offset = getOffset(page);
      const pokemonList = await fetchData<ApiResponse>(
        `${BASE_ENDPOINT}/?limit=${LIMIT}&offset=${offset}`
      );

      const pokemonData = await Promise.all(
        pokemonList.results.map(async (pokemon: { name: string }) => {
          const data = await fetchData<Pokemon>(
            `${BASE_ENDPOINT}/${pokemon.name}`
          );

          return mapDataToPokemonData(data);
        })
      );
      return { data: pokemonData };
    } else {
      const data = await fetchData<Pokemon>(`${BASE_ENDPOINT}/${searchTerm}`);
      const singlePokemonData = mapDataToPokemonData(data);

      return { data: [singlePokemonData] };
    }
  } catch (e) {
    return {
      error: {
        error: e,
      } as FetchBaseQueryError,
    };
  }
};
