export const mockStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

vi.mock('@/storage', () => ({
  storage: mockStorage,
}));
