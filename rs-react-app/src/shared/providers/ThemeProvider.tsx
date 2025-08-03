import { useEffect, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks';
import { ThemeContext } from '@/shared/context';
import { STORAGE_KEY, THEME } from '@/utils/constants';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = (props: Props) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage({
    key: STORAGE_KEY.THEME,
    initialValue: THEME.LIGHT,
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: setCurrentTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
