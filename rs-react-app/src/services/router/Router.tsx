import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './Routes';
import type { FC } from 'react';

export const Router: FC = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
