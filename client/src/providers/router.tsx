import { createBrowserRouter, RouterProvider as RRProvider } from 'react-router-dom';
import IndexPage from '../pages/index-page';
import MePage from '../pages/me';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/me',
    element: <MePage />,
  },
]);

export default function RouterProvider() {
  return <RRProvider router={router} />;
}
