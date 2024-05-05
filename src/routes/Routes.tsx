import { LinearProgress } from '@mui/material';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CityFinder } from '../pages/cityFinder/CityFinder';
import { SearchSelection } from '../pages/searchSelection/SearchSelection';
import Home from '../pages/home/Home';

const routes: RouteObject[] = [
  { path: '/', index: true, element: <Home /> },

  {
    path: '/finder',
    element: <SearchSelection />,
    children: [
      { path: 'cityFinder', element: <CityFinder /> }, 
      {
        path: 'cities',
        element: <h1>Cities</h1>,
        children: [
          {
            path: '',
            element: <h1>All Cities</h1>,
          },
          {
            path: ':cityId',
            element: <h1>City Details</h1>,
            children: [], 
          },
        ],
      },
    ],
  },
];

export const Routes = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider fallbackElement={<LinearProgress />} router={router} />;
};
