import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mapDataToPokemonData } from '@/utils';
import { BASE_ENDPOINT, BASE_URL } from '@/utils/constants';
import { customQueryFn, type customQueryFnArgs } from './pokemonQueries';
import { ApiResponseSchema, PokemonSchema } from './schema';
import type { ApiResponse, PokemonData } from './types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getPokemonData: build.query<PokemonData, string>({
      query: (name) => `${BASE_ENDPOINT}/${name}`,
      rawResponseSchema: PokemonSchema,
      transformResponse: mapDataToPokemonData,
    }),
    getPokemonCount: build.query<number, void>({
      query: () => `${BASE_ENDPOINT}`,
      rawResponseSchema: ApiResponseSchema,
      transformResponse: (response: ApiResponse) => response.count,
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
