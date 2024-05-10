import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavouriteCities } from '../../../zustand/FavouriteCities';

function createData(cityName: string, cityId: string, country: string) {
  return { cityName, cityId, country };
}

const FavCitiesTable = () => {
  const { selectedCities } = useFavouriteCities();
  const rows = useMemo(() => {
    return selectedCities.map((city) => createData(city.cityName, city.cityId, city.country));
  }, [selectedCities]);
  const navigate = useNavigate();
  const handleGoToCity = (cityId: string) => {
    navigate(`/city/${cityId}`);
  };
  return (
    <TableContainer sx={{ maxWidth: { xs: '100%', md: '50%' } }} component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: '#0788d9' }}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => handleGoToCity(row.cityId)}
              key={row.cityId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {row.cityId}
              </TableCell>
              <TableCell align="center">{row.cityName}</TableCell>
              <TableCell align="center">{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FavCitiesTable;
