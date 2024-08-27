import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../components/pages/home/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export { router, RouterProvider };
