import { LinearProgress } from '@mui/material';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CityFinder } from '../pages/cityFinder/CityFinder';
import { Home } from '../pages/home/Home';
import UserProfile from '../pages/userProfile/UserProfile';
import NotFound from '../pages/404NotFound/404NotFound';

const routes: RouteObject[] = [
  { path: '/*', element: <NotFound/>},
  { path: '/', index: true, element: <Home />},
  { path: '/profile', element: <UserProfile />},
  { path: '/cityFinder', element: <CityFinder /> },
  {
    path: '/cities',
    element: <h1>Cities</h1>,
    children: [
      {
        path: '',
        element: <h1>All Cities</h1>,
      },
      {
        path: ':cityId',
        element: <h1>City Details</h1>,
        errorElement: <h1>City Not Found</h1>,
      },
    ],
  },
];

export const Routes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider fallbackElement={<LinearProgress />} router={router} />;
};
