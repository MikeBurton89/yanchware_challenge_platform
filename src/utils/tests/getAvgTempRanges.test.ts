import { getAvgTempRanges } from '../utilsFunctions';

import { describe, expect, it } from 'vitest';

describe('getAvgTempRanges', () => {

    it('should return an array of temperature ranges with corresponding labels when valid min, max, and rangeQty are provided', () => {
      const min = 0;
      const max = 100;
      const rangeQty = 3;

      const result = getAvgTempRanges(min, max, rangeQty);

      expect(result).toEqual([
        { value: '0', label: '0°C' },
        { value: '33', label: '33°C' },
        { value: '67', label: '67°C' },
      ]);
    });
    it('should handle negative min and max values when valid min, max, and rangeQty are provided', () => {
      const min = -50;
      const max = 50;
      const rangeQty = 5;

      const result = getAvgTempRanges(min, max, rangeQty);

      expect(result).toEqual([
        { value: '-50', label: '-50°C' },
        { value: '-30', label: '-30°C' },
        { value: '-10', label: '-10°C' },
        { value: '10', label: '10°C' },
        { value: '30', label: '30°C' },
      ]);
    });
    it('should return an array of temperature ranges with corresponding labels when valid min, max, and default rangeQty are provided', () => {
      const min = 10;
      const max = 20;

      const result = getAvgTempRanges(min, max);

      expect(result).toEqual([
        { value: '10', label: '10°C' },
        { value: '13', label: '13°C' },
        { value: '17', label: '17°C' },
      ]);
    });

    // Should handle min and max values of 0
    it('should return an array of temperature ranges with corresponding labels when min and max values are 0', () => {
      const min = 0;
      const max = 0;
      const rangeQty = 3;

      const result = getAvgTempRanges(min, max, rangeQty);

      expect(result).toEqual([
        { value: '0', label: '0°C' },
        { value: '0', label: '0°C' },
        { value: '0', label: '0°C' },
      ]);
    });

    // Should handle rangeQty value of 1 correctly
    it('should return an array of temperature ranges with corresponding labels when rangeQty is 1', () => {
      const min = 0;
      const max = 100;
      const rangeQty = 1;

      const result = getAvgTempRanges(min, max, rangeQty);

      expect(result).toEqual([
        { value: '0', label: '0°C' },
      ]);
    });

    // Should handle rangeQty value greater than the range between min and max
    it('should return an array of temperature ranges with corresponding labels when rangeQty is greater than the range between min and max', () => {
      const min = 0;
      const max = 100;
      const rangeQty = 5;

      const result = getAvgTempRanges(min, max, rangeQty);

      expect(result).toEqual([
        { value: '0', label: '0°C' },
        { value: '20', label: '20°C' },
        { value: '40', label: '40°C' },
        { value: '60', label: '60°C' },
        { value: '80', label: '80°C' },
      ]);
    });
});
