import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/cityFinder', element: <h1>City Finder</h1> },
      {
        path: '/cities',
        element: <h1>Cities</h1>,
        children: [
          {
            path: '/cities',
            element: <h1>All Cities</h1>,
          },
          {
            path: 'cities/:cityId',
            element: <h1>City Details</h1>,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider fallbackElement router={router} />
  </React.StrictMode>
);
