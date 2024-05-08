import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { AccountCircle } from './icons';

function NavBar() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToHome = () => {
    navigate('/');
  };
  return (
    <Container sx={{color:'#fff'}} color="secondary">
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
            <Typography
              onClick={goToHome}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
            >
              CityFinder
            </Typography>
          <IconButton size="large" onClick={goToProfile} color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default NavBar;
