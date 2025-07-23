import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Fallback } from './Fallback';

describe('Fallback test', () => {
  const mockReload = vi.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        reload: mockReload,
      },
    });

    afterAll(() => {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: window.location,
      });

      mockReload.mockReset();
    });
  });

  test('should render fallback correctly', () => {
    render(<Fallback />);

    const title = screen.getByText('Oops! It seems there was an error...');
    const img = screen.getByAltText('pikachu');
    const textContent = screen.getByText('Try to reload the page');
    const button = screen.getByText('Reload');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(textContent).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should calls page reloading when the button is clicked', async () => {
    render(<Fallback />);

    const button = screen.getByText('Reload');
    const user = userEvent.setup();
    await user.click(button);

    expect(mockReload).toHaveBeenCalledTimes(1);
  });
});
