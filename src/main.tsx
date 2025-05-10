import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from './AppProviders';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
