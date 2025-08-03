import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/shared/providers';
import { store } from '@/store';
import { PATHS } from './constants';
import { Router } from './Router';
import { routesConfig } from './routesConfig';

describe('Router tests', () => {
  test('should render About page to the corresponding route', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [PATHS.ABOUT],
    });

    render(
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    );

    waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('should render Not found page to the corresponding route', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/bad-route'],
    });

    render(
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    );

    waitFor(() => {
      expect(screen.getByTestId('not-found')).toBeInTheDocument();
    });
  });

  test('should render the RouterProvider without crashing', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </Provider>
    );

    waitFor(() => {
      expect(
        screen.getByPlaceholderText('Enter the full pokemon name')
      ).toBeInTheDocument();
    });

    waitFor(() => {
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
  });
});
