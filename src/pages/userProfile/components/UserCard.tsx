import React from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';

const UserCard = () => {
  return (
    <Card sx={{ width: { xs: '100%', md: '50%' }, mt: '2rem' }}>
      <CardContent>
        <Typography variant="h3" component="h2" gutterBottom>
          User Details
        </Typography>
        <Divider sx={{ my: '1rem' }} />
        <Typography color="text.secondary">Name: John Doe</Typography>
        <Typography color="text.secondary">Email: john.doe@mail.com</Typography>
        <Typography color="text.secondary">Location: New York</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
