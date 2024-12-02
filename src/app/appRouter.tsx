import { createBrowserRouter } from 'react-router';
import { BaseLayout } from './layouts/BaseLayout';
import { HomePage } from '@/pages/home';
import { NewsPage } from '@/pages/news';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/news/:id', element: <NewsPage /> },
    ],
  },
]);
