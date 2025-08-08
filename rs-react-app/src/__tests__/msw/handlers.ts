import { http, HttpResponse } from 'msw';
import { mockApiResponse } from '@/__tests__/mocks/mockData';
import { BASE_ENDPOINT, BASE_URL } from '@/utils/constants';

export const handlers = [
  http.get(`${BASE_URL}/${BASE_ENDPOINT}`, () => {
    return HttpResponse.json(mockApiResponse, { status: 200 });
  }),
];
