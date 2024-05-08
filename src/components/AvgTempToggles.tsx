import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';
import mockedCityDetails from '../mocks/mockedCityDetails.json';
import { getAvgTempRanges, getMinAndMaxFromJson } from '../utils/utilsFunctions';

const AvgTempToggles = ({ size = 'small' }: { size?: 'small' | 'large' }) => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();
  const { min, max } = getMinAndMaxFromJson({
    json: mockedCityDetails,
    property: 'climate',
    // this is a HUUUUGE hack to make TypeScript happy
    //TODO: Fix this hack
    subProperty: 'averageTemperature' as unknown as undefined,
  });
  const marks = getAvgTempRanges(min, max);

  const handleChipsClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, value: string) => {
    e.preventDefault();
    if(!value) handleAddParams('avgTemperature', '0');
    if (parseInt(value) >= min && parseInt(value) <= max) handleAddParams('avgTemperature', value);
    else handleAddParams('avgTemperature', '0');
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
