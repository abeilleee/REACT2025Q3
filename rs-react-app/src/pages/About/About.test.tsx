import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { navigateMock } from '@/__tests__/setupTests';
import About from './About';

describe('About page tests', () => {
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
        <About />
      </MemoryRouter>
    );

    const authorLink = screen.getByRole('link', { name: 'abeilleee' });
    const courseLink = screen.getByRole('link', { name: 'REACT2025Q3' });

    expect(authorLink).toBeInTheDocument();
    expect(authorLink).toHaveAttribute('href', 'https://github.com/abeilleee');
    expect(courseLink).toBeInTheDocument();
    expect(courseLink).toHaveAttribute(
      'href',
      'https://rs.school/courses/reactjs'
    );
  });

  test('should call onClick and navigate to main page when button clicked', async () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const button = screen.getByText('Back to main');
    await user.click(button);
    await waitFor(() => expect(navigateMock).toHaveBeenCalledTimes(1));
  });
});
