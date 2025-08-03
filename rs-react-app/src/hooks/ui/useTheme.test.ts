import { renderHook } from '@testing-library/react';
import { useTheme } from './useTheme';

test('should throw an error if used outside of a ThemeProvider', () => {
  expect(() => {
    renderHook(() => useTheme());
  }).toThrowError();
});
