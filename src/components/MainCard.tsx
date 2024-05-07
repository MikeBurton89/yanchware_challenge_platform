import { Box, Paper } from '@mui/material';
import React from 'react';

type MainCardProps = {
  children: React.ReactNode;
};

const MainCard = ({ children }: MainCardProps) => {
  return (
    <Box height={'100dvh'} display="grid" alignItems="start" justifyItems="center">
      <Paper
        elevation={3}
        sx={{ p: { xs: '2rem', sm: '3rem', md: '3rem' }, width: { sm:'90%', md: '70%' } }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default MainCard;
