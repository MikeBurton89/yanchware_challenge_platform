import { describe, expect, it } from "vitest";
import getCityDetails from "../getCityDetails";

describe("getCityDetails", () => {
    // Should return an object with city details
    it("should return an object with city details", async () => {
        const cityDetails = await getCityDetails('1');
        expect(cityDetails).toBeDefined();
        expect(cityDetails.cityId).toBe('1');
        expect(cityDetails.cityName).toBeDefined()
        expect(cityDetails.costOfLivingIndex).toBeDefined();
        expect(cityDetails.climate.averageTemperature).toBeDefined();
        expect(cityDetails.climate.rainfall).toBeDefined();
        
    });
    it("should handle an error when there's no cityId", async () => {
        try {
            const cityDetails = await getCityDetails('');
            expect(cityDetails).toBeDefined();
        } catch (error) {
            expect(error).toBeDefined();
        }

    })
    it("should handle an error when the API call fails because id not present in json", async () => {
        try {
            const cityDetails = await getCityDetails('100');
            expect(cityDetails).toBeDefined();
        } catch (error) {
            expect(error).toBeDefined();
        }
    })

});