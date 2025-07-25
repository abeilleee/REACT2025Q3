import { http, HttpResponse } from 'msw';
import {
  MOCK_ENDPOINT,
  mockApiResponse,
  mockApiResponseResults,
  mockPokemonDataResponse,
} from '@/__mocks__/mockData';
import { server } from '@/__mocks__/msw/server';
import { ONE } from '@/utils/constants';
import { mapDataToPokemonData } from '@/utils/pokemonDataMapper';
import { pokeApi } from './api';
import { BASE_ENDPOINT, BASE_URL } from './constants';

describe('API test', () => {
  test('should fetch and return correct data of all pokemons', async () => {
    const result = await pokeApi.getPokemonResults(ONE);

    expect(result).toEqual(mockApiResponseResults);
  });

  test('should fetch and return correct data of one pokemon', async () => {
    const result = await pokeApi.getPokemonData(MOCK_ENDPOINT);

    expect(result).toEqual(mapDataToPokemonData(mockPokemonDataResponse));
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

    await expect(pokeApi.getPokemonResults(ONE)).rejects.toThrowError(
      errorMessage
    );
  });

  test('should fetch and throw an error without error message', async () => {
    server.use(
      http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
        return new HttpResponse(null, {
          status: 400,
        });
      })
    );

    await expect(pokeApi.getPokemonResults(ONE)).rejects.toThrowError();
  });

  test('should fetch and return correct pokemon count', async () => {
    const result = await pokeApi.getPokemonCount();

    expect(result).toEqual(mockApiResponse.count);
  });
});
