import { server } from '@/__tests__/msw/server';
import '@testing-library/jest-dom';

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
