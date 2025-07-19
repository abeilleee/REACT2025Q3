import { http, HttpResponse } from 'msw';
import {
  cardData,
  MOCK_ENDPOINT,
  mockApiResponse,
  mockPokemonDataResponse,
  NOT_EXISTING_ENDPOINT,
} from '@/__mocks__/mocksData';
import { BASE_ENDPOINT, BASE_URL } from '@/services/api/constants';

export const handlers = [
  http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
    return HttpResponse.json(mockApiResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${MOCK_ENDPOINT}`, () => {
    return HttpResponse.json(mockPokemonDataResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${NOT_EXISTING_ENDPOINT}`, () => {
    return HttpResponse.json(cardData, { status: 404 });
  }),
];
