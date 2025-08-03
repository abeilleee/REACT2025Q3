import { lazy } from 'react';
import { DetailedCard, Layout, MainLayout } from '@/components';
import { ErrorFallback } from '@/components/common';
import { PATHS } from './constants';

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'));
const About = lazy(() => import('@/pages/About/About'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export const routesConfig = [
  {
    element: <Layout />,
    errorElement: <ErrorFallback />,
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
        element: <MainLayout />,
        children: [
          {
            path: PATHS.DETAILS,
            element: <DetailedCard />,
          },
        ],
      },
    ],
  },
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />,
    errorElement: <ErrorFallback />,
  },
];
