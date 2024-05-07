import InnerLayout from '../../components/InnerLayout';
import { Stack, Typography } from '@mui/material';
import { RobotIcon } from '../../components/icons';

const NotFound = () => {
  return (
    <InnerLayout
      header={
        <Stack width={'100%'} direction="column" justifyContent="space-between" alignItems="center">
          <RobotIcon size="5rem" color="#ee5502" />
          <Typography variant="h3" color="#0788d9">
            404 Not Found
          </Typography>
        </Stack>
      }
      footer={
        <Stack width={'100%'} direction="column" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="#0788d9">
            Or Something like that...
          </Typography>
        </Stack>
      }
    >
      <Typography variant="h5" color="#0788d9">
        These are not the droids you are looking for.
      </Typography>
    </InnerLayout>
  );
};

export default NotFound;
