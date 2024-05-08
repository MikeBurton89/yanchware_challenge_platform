import { LinearProgress } from '@mui/material';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404NotFound/404NotFound';
import Cities from '../pages/citiesList/Cities';
import City from '../pages/city/City';
import { CityFinder } from '../pages/cityFinder/CityFinder';
import { Home } from '../pages/home/Home';
import UserProfile from '../pages/userProfile/UserProfile';

const routes: RouteObject[] = [
  { path: '/*', element: <NotFound/>},
  { path: '/', index: true, element: <Home />},
  { path: '/profile', element: <UserProfile />},
  { path: '/cityFinder', element: <CityFinder /> },
  {
    path: '/cities',
    element: <Cities/>,
  },
  {
    path: '/city/:cityId',
    element: <City />,
    errorElement: <h1>City Not Found</h1>,
  },
];

export const Routes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider fallbackElement={<LinearProgress />} router={router} />;
};
