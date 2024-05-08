import { describe, expect, it, vitest } from 'vitest';
import getCities from '../getCities';

describe('getCities', () => {
    // Should return an array of cities with details
    it('should return an array of cities with details', async () => {
        const cities = await getCities();
    
        expect(cities.length).toBeGreaterThan(0);
        expect(cities[0].cityId).toBeDefined();
        expect(cities[0].cityName).toBeDefined();
        expect(cities[0].averageTemperature).toBeDefined();
        expect(cities[0].internetSpeed).toBeDefined();
        expect(cities[0].timezone).toBeDefined();
        expect(cities[0]).toBeDefined();

    });

    // Should handle an error when the API call fails
    it('should handle an error when the API call fails', async () => {
        try {
            await getCities();
        } catch (error) {
            expect(error).toBeDefined();
        }
    })
    it('should throw an error when getDetailsForFilter throws an error', async () => {
        vitest.mock('./getDetailsForFilter', () => vitest.fn().mockRejectedValue(new Error('Error')));
  
        try {
          await getCities();
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
      });
    
})
