import { Typography } from '@mui/material';
import FavCitiesTable from './components/FavCitiesTable';
import UserCard from './components/UserCard';
import InnerLayout from '../../components/InnerLayout';

const UserProfile = () => {
  return (
    <InnerLayout header={<Typography variant="h4" color='#0788d9'>Profile</Typography>}>
      <UserCard />
      <FavCitiesTable />
    </InnerLayout>
  );
};

export default UserProfile;
