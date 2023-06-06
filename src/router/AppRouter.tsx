import { RouterProvider, createHashRouter } from 'react-router-dom';

import { RouterErrorBoundary } from './RouterErrorBoundary/RouterErrorBoundary';

const router = createHashRouter([
  {
    path: '/',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Main')
  },
  {
    path: '/speakers',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Speakers')
  },
  {
    path: '/jobBoard',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/JobBoard')
  },
  {
    path: '/community',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Community')
  },
  {
    path: '*',
    lazy: () => import('~/pages/NotFound')
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
