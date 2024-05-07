import { Box, Slider } from '@mui/material';
import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';
import mockedCityDetails from '../mocks/mockedCityDetails.json';
import { getMinAndMaxFromJson } from '../utils/utilsFunctions';

const InternetSpeedSlider = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();
  const { min: internetMin, max: internetMax } = getMinAndMaxFromJson({
    json: mockedCityDetails,
    property: 'internetSpeed',
    subProperty: 'download',
  });
  return (
      <Slider
        id="internet_slider"
        value={
          searchParams.get('internetSpeed')
            ? parseInt(searchParams.get('internetSpeed') as string)
            : 0
        }
        onChange={(_, value) => handleAddParams('internetSpeed', value.toString())}
        valueLabelDisplay="on"
        step={10}
        sx={{ width: '80%' }}
        marks={[internetMin, internetMax].map((value) => ({ value, label: `${value} Mbps` }))}
        min={internetMin}
        max={internetMax}
      />
  );
};

export default InternetSpeedSlider;
