import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/store',
    element: <StorePage />,
  },
  {
    path: '/store/:productId',
    element: <ProductPage />,
  },
]);

export default router;
