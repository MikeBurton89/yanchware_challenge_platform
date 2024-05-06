import { ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import MainCard from './MainCard';

type InnerLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};
const InnerLayout = ({ children, header, footer }: InnerLayoutProps) => {
  return (
    <MainCard>
      <Box sx={{ p: '2rem' }}>{header ? header : null}</Box>
      <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 2, sm: 2, md: 4 }}>
        {children}
      </Stack>
      {footer ? footer : null}
    </MainCard>
  );
};

export default InnerLayout;
