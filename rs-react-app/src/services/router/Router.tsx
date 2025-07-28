import { Suspense, type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Fallback } from '@/components/common';
import { routesConfig } from './routesConfig';

export const Router: FC = () => {
  const router = createBrowserRouter(routesConfig);

  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
