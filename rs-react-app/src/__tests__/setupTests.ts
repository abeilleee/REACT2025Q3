import { server } from '@/__mocks__/msw/server';
import '@testing-library/jest-dom';

export const navigateMock = vi.fn();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks();
});

afterAll(() => {
  server.close();
  localStorage.clear();
});
