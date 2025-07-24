import { render, screen, waitFor } from '@testing-library/react';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { navigateMock } from '@/__tests__/setupTests';
import { PATHS } from '@/services/router/constants';

describe('Header test', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      return {
        ...(await vi.importActual('react-router-dom')),
        useNavigate: () => navigateMock,
      };
    });
  });

  test('should render Header logo and button', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('logo');
    const button = screen.getByText('About');

    expect(logo).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should call onClick and navigate to about page when button clicked', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const button = screen.getByText('About');

    await user.click(button);
    await waitFor(() => expect(navigateMock).toHaveBeenCalledTimes(1));
    expect(navigateMock).toHaveBeenCalledWith(PATHS.ABOUT);
  });
});
