import { render } from '@testing-library/react';
import { ThemeSwitcher } from '@/components/ui';
import { THEME } from '@/utils/constants';
import { ThemeProvider } from './ThemeProvider';

test('should render with initial theme', () => {
  const initialTheme = THEME.LIGHT;

  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

  expect(document.documentElement).toHaveAttribute('data-theme', initialTheme);
});
