'use client';

import { createContext } from 'react';
import { THEME } from '@/utils/constants';

interface ThemeContextProps {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
