import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { THEME } from '@/utils/constants';
import { ThemeSwitcher } from './ThemeSwitcher';

const mockSetTheme = vi.fn();
let mockTheme = THEME.LIGHT;

vi.mock('@/hooks/ui/useTheme', () => {
  const mockUseTheme = () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
  });

  return {
    useTheme: mockUseTheme,
  };
});

describe('Theme switcher tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockTheme = THEME.LIGHT;
  });

  test('should render without crashing', () => {
    render(<ThemeSwitcher />);

    const switcher = screen.getByTestId('switcher');

    expect(switcher).toBeInTheDocument();
  });

  test('should show correct img when the LIGHT theme is applied', () => {
    const src = '/src/assets/images/moon.png';

    render(<ThemeSwitcher />);

    const img = screen.getByAltText('theme');

    expect(img).toHaveAttribute('src', src);
  });

  test('should show correct img when the DARK theme is applied', () => {
    const src = '/src/assets/images/sun.png';
    mockTheme = THEME.DARK;

    render(<ThemeSwitcher />);

    const img = screen.getByAltText('theme');

    expect(img).toHaveAttribute('src', src);
  });

  test('should switch to DARK theme on click', async () => {
    const user = userEvent.setup();

    render(<ThemeSwitcher />);

    const img = screen.getByAltText('theme');

    await user.click(img);

    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith(THEME.DARK);
  });

  test('should switch to LIGHT theme on click', async () => {
    const user = userEvent.setup();
    mockTheme = THEME.DARK;

    render(<ThemeSwitcher />);

    const img = screen.getByAltText('theme');

    await user.click(img);

    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith(THEME.LIGHT);
  });
});
