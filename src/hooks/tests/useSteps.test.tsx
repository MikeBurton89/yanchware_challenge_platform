import { renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';
import { useSteps } from '../useSteps';

describe('useSteps', () => {
  it('should return an object with the current step and a function to go to the next step', () => {
    const steps = [<div>Step 1</div>, <div>Step 2</div>];
    const { result } = renderHook(() => useSteps(steps));
    expect(result.current.stepComponent).toEqual(steps[0]);
    result.current.nextStep();
    expect(result.current.stepComponent).toEqual(steps[1]);
  });
  it('should return an object with the current step and a function to go to the previous step', () => {
    const steps = [<div>Step 1</div>, <div>Step 2</div>];
    const { result } = renderHook(() => useSteps(steps));
    expect(result.current.stepComponent).toEqual(steps[0]);
    result.current.nextStep();
    expect(result.current.stepComponent).toEqual(steps[1]);
    result.current.prevStep();
    expect(result.current.stepComponent).toEqual(steps[0]);
  });
  it('should return an object with the current step and a function to go to a specific step', () => {
    const steps = [<div>Step 1</div>, <div>Step 2</div>];
    const { result } = renderHook(() => useSteps(steps));
    expect(result.current.stepComponent).toEqual(steps[0]);
    result.current.goToStep(1);
    expect(result.current.stepComponent).toEqual(steps[1]);
  });
  it('should return an object with the current step and a property to check if is the last step', () => {
    const steps = [<div>Step 1</div>, <div>Step 2</div>];
    const { result } = renderHook(() => useSteps(steps));
    expect(result.current.isLastStep).toBe(false);
    result.current.nextStep();
    expect(result.current.isLastStep).toBe(true);
  });
  it('should return an object with the current step and a property to check if is the first step', () => {
    const steps = [<div>Step 1</div>, <div>Step 2</div>];
    const { result } = renderHook(() => useSteps(steps));
    expect(result.current.isFirstStep).toBe(true);
    result.current.nextStep();
    expect(result.current.isFirstStep).toBe(false);
  });
});
