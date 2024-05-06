import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HelpIcon, PersonSearch } from '../../components/icons';
import SelectionCard from './components/SelectionCard';
import TitleSection from './components/TitleSection';
import InnerLayout from '../../components/InnerLayout';
export const Home = () => {
  const navigate = useNavigate();
  const selectionOptions = [
    {
      title: 'Click here if you need a suggestion',
      icon: <HelpIcon size="5rem" />,
      onClick: () => {
        navigate('/cityFinder');
      },
    },
    {
      title: 'Click here if you want to search by yourself',
      icon: <PersonSearch size="5rem" />,
      onClick: () => {
        navigate('/cities');
      },
    },
  ];
  return (
    <>
      <InnerLayout header={<TitleSection />}>
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 2, sm: 2, md: 4 }}>
          {selectionOptions.map((option, index) => (
            <SelectionCard key={index} {...option} />
          ))}
        </Stack>
      </InnerLayout>
    </>
  );
};
