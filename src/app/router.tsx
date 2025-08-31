import { Suspense, type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage, NotFoundPage } from '@/pages';
import { Layout, Spinner } from '@/shared/ui';

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<Spinner />}>
              <MainPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
