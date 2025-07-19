import { http, HttpResponse } from 'msw';
import {
  cardData,
  MOCK_ENDPOINT,
  mockApiResponse,
} from '@/__mocks__/mocksData';
import { BASE_ENDPOINT, BASE_URL } from '@/services/api/constants';

export const handlers = [
  http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
    return HttpResponse.json(mockApiResponse, { status: 200 });
  }),

  http.get(`${BASE_URL}/${MOCK_ENDPOINT}`, () => {
    return HttpResponse.json(cardData, { status: 200 });
  }),
];
