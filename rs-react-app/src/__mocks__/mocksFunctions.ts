export const mockStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

vi.mock('@/storage', () => ({
  storage: mockStorage,
}));

export const mockReload = vi.fn();

Object.defineProperty(window, 'location', {
  configurable: true,
  value: {
    ...window.location,
    reload: mockReload,
  },
});
