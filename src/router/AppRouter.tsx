import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterErrorBoundary } from './RouterErrorBoundary/RouterErrorBoundary';

const router = createBrowserRouter([
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
    path: '/agenda',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Agenda')
  },
  {
    path: '/map',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Map')
  },
  {
    path: '/community',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Community')
  },
  {
    path: '/code',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Code')
  },
  {
    path: '/privacy',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/PrivacyPolicy')
  },
  {
    path: '/photos',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Memories')
  },
  {
    path: '/recordings',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Recordings')
  },
  {
    path: '/game',
    ErrorBoundary: RouterErrorBoundary,
    lazy: () => import('~/pages/Game')
  },
  {
    path: '*',
    lazy: () => import('~/pages/NotFound')
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
