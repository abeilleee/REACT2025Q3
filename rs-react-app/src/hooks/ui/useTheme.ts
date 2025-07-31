import { useContext } from 'react';
import { ThemeContext } from '@/shared/context';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme hook must be inside a ThemeProvider');
  }

  return context;
};
