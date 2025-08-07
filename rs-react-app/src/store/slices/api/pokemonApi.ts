import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mapDataToPokemonData } from '@/utils';
import { BASE_ENDPOINT, BASE_URL } from '@/utils/constants';
import { customQueryFn, type customQueryFnArgs } from './pokemonQueries';
import type { ApiResponse, Pokemon, PokemonData } from './types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getPokemonData: build.query<PokemonData, string>({
      query: (name) => `${BASE_ENDPOINT}/${name}`,
      transformResponse: (response: Pokemon) => mapDataToPokemonData(response),
      transformErrorResponse: (error) => `${error.status}`,
    }),
    getPokemonCount: build.query<number, void>({
      query: () => `${BASE_ENDPOINT}`,
      transformResponse: (response: ApiResponse) => response.count,
      transformErrorResponse: (error) => `${error.status}`,
    }),
    getAllPokemonData: build.query<PokemonData[], customQueryFnArgs>({
      queryFn: customQueryFn,
    }),
  }),
});

export const {
  useGetPokemonDataQuery,
  useGetPokemonCountQuery,
  useGetAllPokemonDataQuery,
} = pokemonApi;
