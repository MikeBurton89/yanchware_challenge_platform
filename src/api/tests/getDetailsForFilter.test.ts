import { describe, expect, it } from 'vitest';
import getDetailsForFilter from '../getDetailsForFilter';

describe('getCityDetailsForFilter', () => {
  it('should return an object with city details', async () => {
    const cityDetails = await getDetailsForFilter('1');
    expect(cityDetails).toBeDefined();
    expect(cityDetails.averageTemperature).toBeDefined();
    expect(cityDetails.internetSpeed).toBeDefined();
    expect(cityDetails.timezone).toBeDefined();
  });
  it("should handle an error when there's no cityId", async () => {
    try {
      const cityDetails = await getDetailsForFilter('');
      expect(cityDetails).toBeDefined();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  it('should handle and resolve with default values when given an empty object', async () => {
    const cityId = "";
    const result = await getDetailsForFilter(cityId);
    expect(result).toEqual({
      averageTemperature: 0,
      internetSpeed: 0,
      timezone: ""
    });
  });
  it('should return an object with averageTemperature, internetSpeed and timezone properties when given a valid cityId', async () => {
    const cityId = "1";
    const result = await getDetailsForFilter(cityId);
    expect(result).toEqual({
      averageTemperature: 12.78,
      internetSpeed: 100,
      timezone: "EST"
    });
  });
  
});
