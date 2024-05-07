import { Stack, Typography } from '@mui/material';
import { RobotIcon } from '../../../components/icons';

const Header = () => {
  return (
    <Stack width={'100%'} direction="column" justifyContent="space-between" alignItems="center">
      <RobotIcon size="5rem" color="#ee5502" />
      <Typography variant="h3" color="#0788d9">
        404 Not Found
      </Typography>
    </Stack>
  );
};

export default Header;
