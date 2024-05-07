import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import React from 'react';
import { ArrowFwd } from '../../../components/icons';

type CityCardProps = {
  onClick: () => void;
  icon: React.ReactNode;
  name: string;
};

const CityCard = ({ onClick, icon, name }: CityCardProps) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        color: '#0788d9',
        width: '30rem',
        height: { xs: '5rem', sm: '7rem', md: '7rem' },
        display: 'flex',
        padding: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <CardHeader
        titleTypographyProps={{ variant: 'h5', whiteSpace: 'wrap', overflow: 'hidden' }}
        avatar={icon}
        title={name}
      ></CardHeader>
      <CardContent>
        <IconButton sx={{ color: '#ee5502' }}>
          <ArrowFwd size="5rem" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CityCard;
