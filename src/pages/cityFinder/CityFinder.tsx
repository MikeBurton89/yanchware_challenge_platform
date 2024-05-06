import InnerLayout from '../../components/InnerLayout';
import { useSteps } from '../../hooks/useSteps';
import InternetSpeedStep from './components/InternetSpeedStep';
import PresentationStep from './components/PresentationStep';
import TimezoneStep from './components/TimezoneStep';
import AvgTempStep from './components/AvgTempStep';
import StepperHeader from './components/StepperHeader';
import StepperFooter from './components/StepperFooter';

export const CityFinder = () => {
  const steps = [<PresentationStep />, <TimezoneStep />, <InternetSpeedStep />, <AvgTempStep />];
  const { activeStep, stepComponent, nextStep, prevStep, isFirstStep, isLastStep } =
    useSteps(steps);

  const footerProps = {
    prevStep,
    nextStep,
    isFirstStep,
    isLastStep,
  };

  return (
    <>
      <InnerLayout
        header={<StepperHeader activeStep={activeStep} steps={steps} />}
        footer={<StepperFooter {...footerProps} />}
      >
        {stepComponent ? stepComponent : null}
      </InnerLayout>
    </>
  );
};
