import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterProvider from './providers/router';
import { TRPCProvider } from './providers/trpc';
import reportWebVitals from './reportWebVitals';

async function renderRoot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./__mocks__/msw/browser');
    await worker.start();
  }

  const RootComponent = (
    <StrictMode>
      <TRPCProvider>
        <RouterProvider />
      </TRPCProvider>
    </StrictMode>
  );

  const rootElement = document.getElementById('root') as HTMLElement;
  const root = createRoot(rootElement);
  root.render(RootComponent);
}

renderRoot();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
