import { renderHook } from '@testing-library/react';
import { STORAGE_KEY } from '@/utils/constants';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorageTest', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should set the correct searchTerm value', () => {
    const value = 'test';

    const { result } = renderHook(() =>
      useLocalStorage({ key: STORAGE_KEY.SEARCH_TERM, initialValue: value })
    );

    const [searchTerm] = result.current;

    expect(searchTerm).toEqual(value);
  });
});
