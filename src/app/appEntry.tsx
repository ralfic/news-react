import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BaseLayout } from './layouts/BaseLayout';
import '@/shared/index.css';
import { Provider } from 'react-redux';
import { store } from './appStore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
