import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StrictMode } from 'react';
import '@/shared/index.css';
import { Provider } from 'react-redux';
import { store } from './appStore';
import { RouterProvider } from 'react-router';
import { appRouter } from './appRouter';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
