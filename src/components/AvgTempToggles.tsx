import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';
import { getAvgTempRanges, getMinAndMaxFromJson } from '../utils/utilsFunctions';
import mockedCityDetails from '../mocks/mockedCityDetails.json';

const AvgTempToggles = ({size= 'small'}:{size?: 'small' | 'large'}) => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();
  const { min, max } = getMinAndMaxFromJson({
    json: mockedCityDetails,
    property: 'climate',
    subProperty: 'averageTemperature',
  });
  const marks = getAvgTempRanges(min, max);

  const handleChipsClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => {
    handleAddParams('avgTemperature', value ?? 0);
  };
  return (
    <ToggleButtonGroup
      size={size}
      exclusive
      value={searchParams.get('avgTemperature')}
      onChange={handleChipsClick}
    >
      {marks.map((mark) => (
        <ToggleButton key={mark.value} value={mark.value.toString()}>
          {mark.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default AvgTempToggles;
