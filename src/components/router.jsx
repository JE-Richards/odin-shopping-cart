import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import StorePage from '../pages/StorePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'store',
    element: <StorePage />,
  },
]);

export default router;
