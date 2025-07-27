import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesArr } from './routesArr';
import type { FC } from 'react';

export const Router: FC = () => {
  const router = createBrowserRouter(routesArr);

  return <RouterProvider router={router} />;
};
