import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MockErrorBoundary } from '@/__mocks__/MockErrorBoundary';
import { ErrorButton } from './ErrorButton';

describe('Error Button test', () => {
  test('should render error button', () => {
    render(<ErrorButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should display fallback ui when button clicked', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MockErrorBoundary>
        <ErrorButton />
      </MockErrorBoundary>
    );

    const element = screen.getByRole('button');
    const user = userEvent.setup();

    await user.click(element);

    expect(screen.getByText('There was an error')).toBeInTheDocument();
  });

  test('should log error message to console', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error');

    render(
      <MockErrorBoundary>
        <ErrorButton />
      </MockErrorBoundary>
    );

    const element = screen.getByRole('button');
    const user = userEvent.setup();

    await user.click(element);

    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
