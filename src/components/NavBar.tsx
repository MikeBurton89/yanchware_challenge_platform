import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AccountCircle } from './icons';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CityFinder
          </Typography>
          <div>
            <IconButton size="large" onClick={goToProfile} color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
