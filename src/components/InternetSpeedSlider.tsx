import { Slider } from '@mui/material';
import { useSearchParamsAsState } from '../hooks/useSearchParamsAsState';
import mockedCityDetails from '../mocks/mockedCityDetails.json';
import { getMinAndMaxFromJson } from '../utils/utilsFunctions';

const InternetSpeedSlider = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();
  const { min: internetMin, max: internetMax } = getMinAndMaxFromJson({
    json: mockedCityDetails,
    property: 'internetSpeed',
    // this is a HUUUUGE hack to make TypeScript happy
    // TODO: Fix this hack
    subProperty: 'download' as unknown as undefined,
  });
  const handleSliderChange = (e: Event, value: number | number[]) => {
    e.preventDefault();
    if(!value) handleAddParams('internetSpeed', '0');
    if (parseInt(value.toString()) >= internetMin && parseInt(value.toString()) <= internetMax) handleAddParams('internetSpeed', value.toString());
    else handleAddParams('internetSpeed', '0');
  }

  return (
    <Slider
      id="internet_slider"
      value={
        searchParams.get('internetSpeed')
          ? parseInt(searchParams.get('internetSpeed') as string)
          : 0
      }
      onChange={handleSliderChange}
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
