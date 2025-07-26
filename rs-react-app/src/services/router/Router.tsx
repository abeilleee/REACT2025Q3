import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary, Layout } from '@/components';
import { About, MainPage, NotFound } from '@/pages';
import { DetailedPage } from '@/pages/DetailedPage';
import { PATHS } from './constants';
import type { FC } from 'react';

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: PATHS.ROOT,
          element: <MainPage />,
        },
        {
          path: PATHS.ABOUT,
          element: <About />,
        },
        {
          path: PATHS.DETAILS,
          element: <DetailedPage />,
        },
      ],
    },
    {
      path: PATHS.NOT_FOUND,
      element: (
        <ErrorBoundary>
          <NotFound />
        </ErrorBoundary>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
