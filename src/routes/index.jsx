import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductCreation from '../components/product/ProductCreation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/create-product',
        element: <ProductCreation />,
      },
      {
        path: '/epd-builder',
        element: <App />,
      }
    ]
  }
]);
