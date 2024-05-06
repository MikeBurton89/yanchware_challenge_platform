import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { ArrowFwd } from '../../../components/icons';

type SelectionCardProps = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const SelectionCard = ({ title, icon, onClick }: SelectionCardProps) => {
  return (
    <Card
      sx={{
        color: '#0788d9',
        width: '30rem',
        height: { xs: '5rem', sm: '7rem', md: '7rem' },
        display: 'flex',
        padding: '1rem',
        alignItems: 'center',
      }}
    >
      <CardHeader
        titleTypographyProps={{ variant: 'h5', whiteSpace: 'wrap', overflow: 'hidden' }}
        avatar={icon}
        title={title}
      ></CardHeader>
      <CardContent>
        <IconButton onClick={onClick} sx={{ color: '#ee5502' }}>
          <ArrowFwd size="5rem" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default SelectionCard;
