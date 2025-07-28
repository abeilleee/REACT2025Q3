import { DetailedCard, ErrorBoundary, Layout, MainLayout } from '@/components';
import { MainPage, About, NotFound } from '@/pages';
import { PATHS } from './constants';

export const routesArr = [
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
    element: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    ),
  },
];
