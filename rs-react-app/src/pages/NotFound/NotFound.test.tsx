import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { navigateMock } from '@/__tests__/setupTests';
import NotFound from './NotFound';

describe('Not Found page tests', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      return {
        ...(await vi.importActual('react-router-dom')),
        useNavigate: () => navigateMock,
      };
    });
  });

  test('should render page correctly', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const title = screen.getByText('Oops! Page not found...');
    const img = screen.getByAltText('pikachu');
    const button = screen.getByText('Back to main');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should call onClick and navigate to main page when button clicked', async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const button = screen.getByText('Back to main');
    await user.click(button);
    await waitFor(() => expect(navigateMock).toHaveBeenCalledTimes(1));
  });
});
