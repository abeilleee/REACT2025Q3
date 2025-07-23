import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components';
import { About, MainPage, NotFound } from '@/pages';
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
      ],
    },
    {
      path: PATHS.NOT_FOUND,
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
