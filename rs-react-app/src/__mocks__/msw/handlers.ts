import { http, HttpResponse } from 'msw';
import {
  cardData,
  MOCK_ENDPOINT,
  mockApiResponse,
  mockPokemonDataResponse,
  NOT_EXISTING_ENDPOINT,
  ONE,
  TEST_ENDPOINT,
} from '@/__mocks__/mockData';
import { BASE_ENDPOINT, BASE_URL } from '@/services/api/constants';

export const handlers = [
  http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
    return HttpResponse.json(mockApiResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${MOCK_ENDPOINT}`, () => {
    return HttpResponse.json(mockPokemonDataResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${NOT_EXISTING_ENDPOINT}`, () => {
    return HttpResponse.json(null, { status: 404 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${TEST_ENDPOINT}`, () => {
    return HttpResponse.json(cardData, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/${TEST_ENDPOINT}${ONE}`, () => {
    return HttpResponse.json(cardData, { status: 200 });
  }),

  http.get(`${BASE_URL}/${BASE_ENDPOINT}/pikachu`, () => {
    return HttpResponse.json(cardData, { status: 200 });
  }),
];
