import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { navigateMock } from '@/__tests__/setupTests';
import { PATHS } from '@/services/router/constants';
import { Error } from './Error';

describe('Error component tests', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async () => {
      return {
        ...(await vi.importActual('react-router-dom')),
        useNavigate: () => navigateMock,
      };
    });
  });

  const errorMessage = 'test error';

  test('should render elements correctly', () => {
    render(
      <MemoryRouter>
        <Error error={`Error: ${errorMessage}`} />
      </MemoryRouter>
    );

    const errorText = screen.getByText(`Error: ${errorMessage}`);
    const btn = screen.getByText('Go Back');

    expect(errorText).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test('should navigate to the root page when button clicked', async () => {
    render(
      <MemoryRouter>
        <Error error={`Error: ${errorMessage}`} />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const button = screen.getByText('Go Back');

    await user.click(button);
    await waitFor(() => expect(navigateMock).toHaveBeenCalledTimes(1));
    expect(navigateMock).toHaveBeenCalledWith(PATHS.ROOT);
  });
});
