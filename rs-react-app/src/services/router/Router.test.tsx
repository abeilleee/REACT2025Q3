import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { PATHS } from './constants';
import { routes } from './Routes';

describe('Router tests', () => {
  test('should render About page to the corresponding route', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [PATHS.ABOUT],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('should render Not found page to the corresponding route', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/bad-route'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
