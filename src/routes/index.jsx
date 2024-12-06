import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductCreation from '../components/product/ProductCreation';
import ErrorBoundary from '../components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/create-product',
        element: (
          <ErrorBoundary>
            <ProductCreation />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

export default router;
