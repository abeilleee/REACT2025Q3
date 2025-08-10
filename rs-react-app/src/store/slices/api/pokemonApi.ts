import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mapDataToPokemonData } from '@/utils';
import { BASE_ENDPOINT, BASE_URL, TAGS } from '@/utils/constants';
import { customQueryFn, type customQueryFnArgs } from './pokemonQueries';
import { ApiResponseSchema, PokemonSchema } from './schema';
import type { ApiResponse, Pokemon, PokemonData } from './types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: Object.values(TAGS),
  endpoints: (build) => ({
    getPokemonData: build.query<PokemonData, string>({
      query: (name) => `${BASE_ENDPOINT}/${name}`,
      rawResponseSchema: PokemonSchema,
      transformResponse: (response: Pokemon) => mapDataToPokemonData(response),
      providesTags: [TAGS.POKEMON_DATA],
    }),
    getPokemonCount: build.query<number, void>({
      query: () => `${BASE_ENDPOINT}`,
      rawResponseSchema: ApiResponseSchema,
      transformResponse: (response: ApiResponse) => response.count,
      providesTags: [TAGS.POKEMON_DATA],
    }),
    getAllPokemonData: build.query<PokemonData[], customQueryFnArgs>({
      queryFn: customQueryFn,
      providesTags: [TAGS.POKEMON_DATA],
    }),
  }),
});

export const {
  useGetPokemonDataQuery,
  useGetPokemonCountQuery,
  useGetAllPokemonDataQuery,
} = pokemonApi;
