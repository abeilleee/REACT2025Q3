import { createContext } from 'react';
import { THEME } from '@/utils/constants';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: THEME) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.LIGHT,
  setTheme: () => {},
});
