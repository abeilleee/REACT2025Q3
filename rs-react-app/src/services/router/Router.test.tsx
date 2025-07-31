import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { PATHS } from './constants';
import { Router } from './Router';
import { routesConfig } from './routesConfig';

describe('Router tests', () => {
  test('should render About page to the corresponding route', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [PATHS.ABOUT],
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('should render Not found page to the corresponding route', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/bad-route'],
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByTestId('not-found')).toBeInTheDocument();
    });
  });

  test('should render the RouterProvider without crashing', async () => {
    render(
      <Provider store={store}>
        <Router />
      </Provider>
    );

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText('Enter the full pokemon name')
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
  });
});
