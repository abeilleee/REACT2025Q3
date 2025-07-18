import { storage } from '@/services';

export const mockSetItem = vi.spyOn(storage, 'setItem');
export const mockGetItem = vi.spyOn(storage, 'getItem');
export const mockReload = vi.fn();

Object.defineProperty(window, 'location', {
  configurable: true,
  value: {
    ...window.location,
    reload: mockReload,
  },
});
