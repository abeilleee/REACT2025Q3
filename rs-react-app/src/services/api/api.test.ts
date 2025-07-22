import { http, HttpResponse } from 'msw';
import {
  MOCK_ENDPOINT,
  mockApiResponseResults,
  mockPokemonDataResponse,
  NOT_EXISTING_ENDPOINT,
} from '@/__mocks__/mocksData';
import { server } from '@/__mocks__/msw/server';
import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';
import { pokeApi } from './api';
import { BASE_ENDPOINT, BASE_URL } from './constants';

describe('API test', () => {
  test('should fetch and return correct data of all pokemons', async () => {
    const result = await pokeApi.getPokemons();

    expect(result).toEqual(mockApiResponseResults);
  });

  test('should fetch and return correct data of one pokemon', async () => {
    const result = await pokeApi.getPokemonData(MOCK_ENDPOINT);

    expect(result).toEqual(mapDataToPokemonData(mockPokemonDataResponse));
  });

  test('should fetch and return undefined with incorrect pokemon name', async () => {
    const result = await pokeApi.getPokemonData(NOT_EXISTING_ENDPOINT);

    expect(result).toEqual(undefined);
  });

  test('should fetch and throw an error', async () => {
    const errorMessage = 'Error message';

    server.use(
      http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: errorMessage,
        });
      })
    );

    await expect(pokeApi.getPokemons()).rejects.toThrowError(errorMessage);
  });

  test('should fetch and throw an error without error message', async () => {
    server.use(
      http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
        return new HttpResponse(null, {
          status: 400,
        });
      })
    );

    await expect(pokeApi.getPokemons()).rejects.toThrowError();
  });
});
