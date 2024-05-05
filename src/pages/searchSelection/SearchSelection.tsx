import { Box, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HelpIcon, PersonSearch } from '../../components/icons';
import SelectionCard from './components/SelectionCard';
import TitleSection from './components/TitleSection';
export const SearchSelection = () => {
  const navigate = useNavigate();
  const selectionOptions = [
    {
      title: 'Click here if you need a suggestion',
      icon: <HelpIcon size="5rem" />,
      onClick: () => {
        navigate('/finder/cityFinder');
      },
    },
    {
      title: 'Click here if you want to search by yourself',
      icon: <PersonSearch size="5rem" />,
      onClick: () => {
        navigate('/finder/cities');
      },
    },
  ];
  return (
    <Box height={'100dvh'} display="grid" alignItems="center" justifyItems="center">
      <Paper elevation={3} sx={{ p: { xs: '2rem', sm: '3rem', md: '3rem' } }}>
        <TitleSection />
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 2, sm: 2, md: 4 }}>
          {' '}
          {selectionOptions.map((option, index) => (
            <SelectionCard key={index} {...option} />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};
