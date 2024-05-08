export const getMinAndMaxFromJson = <T>({
  json,
  property,
  subProperty,
}: {
  json: Array<T>;
  property: keyof T;
  subProperty?: keyof T[keyof T] | undefined;
}) => {
  const { min, max } = json.reduce(
    (acc, curr) => {
      let value: number;
      if (
        subProperty &&
        typeof curr[property] === 'object' &&
        curr[property][subProperty] !== undefined
      ) {
        value = typeof curr[property][subProperty] === 'string' ? parseInt(curr[property][subProperty] as string) : curr[property][subProperty] as number;
      } else {
        value = typeof curr[property] === 'string' ? parseInt(curr[property] as string) : curr[property] as number;

      }

      if (isNaN(value) || !isFinite(value) || value === null || value === undefined) {
        return acc;
      }

      if (value < acc.min) {
        acc.min = value;
      }
      if (value > acc.max) {
        acc.max = value;
      }

      return acc;
    },
    { min: Infinity, max: -Infinity }
  );

  return { min, max };
};

/**
 * Calculates the average temperature ranges between a minimum and maximum value.
 * 
 * @param min - The minimum temperature value.
 * @param max - The maximum temperature value.
 * @param rangeQty - The number of temperature ranges to calculate. Default is 3.
 * @returns An array of temperature ranges with corresponding labels.
 */
export const getAvgTempRanges = (min: number, max: number, rangeQty: number = 3) => {
    const range = max - min;
    const interval = range / rangeQty;
    return Array.from({ length: rangeQty }, (_, i) => {
        return {
            value: (min + interval * i).toFixed(0),
            label: `${(min + interval * i).toFixed(0)}°C`,
        };
    });
}
