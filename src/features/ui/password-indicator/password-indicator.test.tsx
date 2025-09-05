import { render, screen } from '@testing-library/react';
import { PasswordIndicator } from './password-indicator';

describe('Password indicator tests', () => {
  test('should render empty indicator for empty password', () => {
    const password = '';

    render(<PasswordIndicator password={password} />);

    const indicator = screen.getByTestId('indicator');
    expect(indicator).toHaveClass('bg-gray-400/50');
  });

  test('should show red color for weak password', () => {
    render(<PasswordIndicator password="weak" />);

    const bar = screen.getByTestId('bar');
    expect(bar).toHaveClass('bg-red-500');
  });

  test('should show yellow color for medium password', () => {
    render(<PasswordIndicator password="mediuM1" />);

    const bar = screen.getByTestId('bar');
    expect(bar).toHaveClass('bg-yellow-500');
  });

  test('should show green color for medium password', () => {
    render(<PasswordIndicator password="Strength1!" />);

    const bar = screen.getByTestId('bar');
    expect(bar).toHaveClass('bg-green-500');
  });

  test('should calculate correct width for different strengths', () => {
    const { rerender } = render(<PasswordIndicator password="a" />);

    let bar = screen.getByTestId('bar');
    expect(bar).toHaveStyle('width: 20%');

    rerender(<PasswordIndicator password="medium1" />);
    bar = screen.getByTestId('bar');
    expect(bar).toHaveStyle('width: 40%');

    rerender(<PasswordIndicator password="Strength1!" />);
    bar = screen.getByTestId('bar');
    expect(bar).toHaveStyle('width: 100%');
  });
});
