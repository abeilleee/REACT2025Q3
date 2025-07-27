import { renderHook } from '@testing-library/react';
import { DOTS } from '@/utils/constants';
import { usePagination } from './usePagination';

describe('usePagination tests', () => {
  test('should return correct array when totalPageNumbers is greater than or equal to totalPageCount', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, total: 30 })
    );

    expect(result.current).toEqual([1, 2, 3]);
  });

  test('should return correct array when totalPageNumbers is less than totalPageCount and both dots are not displayed', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 1, total: 100 })
    );

    expect(result.current).toEqual([1, 2, 3, 4, 5, 6, DOTS, 9]);
  });

  test('should return correct array when totalPageNumbers is less than totalPageCount and both dots are displayed', () => {
    const { result } = renderHook(() =>
      usePagination({ currentPage: 5, total: 200 })
    );

    expect(result.current).toEqual([1, DOTS, 3, 4, 5, 6, 7, DOTS, 17]);
  });
});
