import { http, HttpResponse } from 'msw';
import {
  mockApiResponse,
  mockPokemonResponse,
} from '@/__tests__/mocks/mockData';
import { BASE_ENDPOINT, BASE_URL, ONE, TEST_ENDPOINT } from '@/utils/constants';

export const handlers = [
  http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
    return HttpResponse.json(mockApiResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${TEST_ENDPOINT}`, () => {
    return HttpResponse.json(mockPokemonResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${TEST_ENDPOINT}${ONE}`, () => {
    return HttpResponse.json(mockPokemonResponse, { status: 200 });
  }),
];
