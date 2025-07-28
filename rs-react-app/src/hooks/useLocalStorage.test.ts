import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { STORAGE_KEY, useLocalStorage } from './useLocalStorage';

describe('useLocalStorageTest', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should have the correct searchTerm value', () => {
    const value = 'test';
    localStorage.setItem(STORAGE_KEY, value);

    const { result } = renderHook(() => useLocalStorage());
    const [searchTerm] = result.current;

    expect(searchTerm).toEqual(value);
  });

  test('should set the correct searchTerm value', () => {
    const value = 'test1';
    const { result } = renderHook(() => useLocalStorage());

    act(() => {
      result.current[1](value);
    });

    expect(localStorage.getItem(STORAGE_KEY)).toEqual(value);
  });
});
