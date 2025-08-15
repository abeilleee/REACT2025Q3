import {
  type BaseQueryApi,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
  type QueryReturnValue,
} from '@reduxjs/toolkit/query';
import { getOffset } from '@/utils';
import { BASE_ENDPOINT, CUSTOM_ERROR, LIMIT } from '@/utils/constants';
import { normalizeError } from './helpers';
import { pokemonApi } from './pokemonApi';
import { ApiResponseSchema } from './schema';
import type { PokemonData, Results } from './types';

export type customQueryFnArgs = {
  page: number;
  searchTerm?: string;
};

export const fetchPokemonDetails = async (
  api: BaseQueryApi,
  results: Results[]
): Promise<PokemonData[] | null> => {
  const pokemonData = await Promise.all(
    results.map(async (pokemon) => {
      const result = await api
        .dispatch(pokemonApi.endpoints.getPokemonData.initiate(pokemon.name))
        .unwrap();

      return result;
    })
  );

  if (pokemonData.every((pokemon) => pokemon !== undefined)) {
    return pokemonData;
  }

  return null;
};

export const customQueryFn = async (
  args: customQueryFnArgs,
  api: BaseQueryApi,
  _extraOptions: unknown,
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
): Promise<
  QueryReturnValue<PokemonData[], FetchBaseQueryError, FetchBaseQueryMeta>
> => {
  const { page, searchTerm } = args;
  const offset = getOffset(page);

  if (searchTerm) {
    const result = await api.dispatch(
      pokemonApi.endpoints.getPokemonData.initiate(searchTerm)
    );

    if (result.error) {
      return {
        error: normalizeError(result.error),
      };
    }

    if (result.data) {
      return { data: [result.data] };
    }
  }

  const response = await baseQuery(
    `${BASE_ENDPOINT}/?limit=${LIMIT}&offset=${offset}`,
    api,
    {}
  );

  if (response.error) {
    return {
      error: response.error,
    };
  }

  const apiResponse = ApiResponseSchema.parse(response.data);
  const pokemonData = await fetchPokemonDetails(api, apiResponse.results);

  if (!pokemonData) {
    return {
      error: CUSTOM_ERROR,
    };
  }

  return { data: pokemonData };
};
