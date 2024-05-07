import { getMinAndMaxFromJson } from "../utilsFunctions";

describe('getMinAndMaxFromJson', () => {

    // Should return the minimum and maximum values of a given property in a JSON array
    it('should return the minimum and maximum values when the JSON array is not empty', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });

    // Should handle a JSON array with empty objects
    it('should return Infinity as minimum and -Infinity as maximum when the JSON array is empty', () => {
        
        const json = [];

        const result = getMinAndMaxFromJson({ json, property: 'value' });

        expect(result.min).toBe(Infinity);
        expect(result.max).toBe(-Infinity);
    });

    // Should handle a JSON array with a single object
    it('should return the minimum and maximum values when the JSON array is not empty', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });

    // Should handle a JSON array with multiple objects
    it('should return the minimum and maximum values when the JSON array is not empty', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });

    // Should handle a JSON array with objects containing nested properties
    it('should return the minimum and maximum values when the JSON array is not empty', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });

    // Should handle a JSON array with objects containing undefined values
    it('should return the minimum and maximum values when the JSON array contains objects with undefined values', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: undefined },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(8);
    });

    // Should handle a JSON array with objects containing non-numeric values
    it('should return the minimum and maximum values when the JSON array contains non-numeric values', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: "10" },
        { id: 3, value: 3 },
        { id: 4, value: "8" },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });

    // Should handle a JSON array with objects containing NaN or Infinity values
    it('should return the minimum and maximum values when the JSON array contains NaN or Infinity values', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: NaN },
        { id: 3, value: Infinity },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(NaN);
      expect(result.max).toBe(Infinity);
    });

    // Should handle a JSON array with objects containing negative values
    it('should return the minimum and maximum values when the JSON array contains negative values', () => {
      const json = [
        { id: 1, value: -5 },
        { id: 2, value: -10 },
        { id: 3, value: -3 },
        { id: 4, value: -8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(-10);
      expect(result.max).toBe(-3);
    });

    // Should handle a JSON array with objects containing large values
    it('should return the minimum and maximum values when the JSON array is not empty', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });

    // Should handle a JSON array with objects containing decimal values
    it('should return the minimum and maximum values when the JSON array is not empty', () => {
      const json = [
        { id: 1, value: 5 },
        { id: 2, value: 10 },
        { id: 3, value: 3 },
        { id: 4, value: 8 },
      ];

      const result = getMinAndMaxFromJson({ json, property: 'value' });

      expect(result.min).toBe(3);
      expect(result.max).toBe(10);
    });
});
