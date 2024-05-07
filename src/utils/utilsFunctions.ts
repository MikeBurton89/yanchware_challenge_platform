
export const getMinAndMaxFromJson = <T>({
    json,
    property,
    subProperty,
}: {
    json: Array<T>;
    property: keyof T;
    subProperty?: keyof T[keyof T];
}) => {
    let min = Infinity;
    let max = -Infinity;

    json.forEach((curr) => {
        let value: number; 
        if (subProperty) {
            value = curr[property][subProperty] as number; 
        } else {
            value = curr[property] as number; 
        }

        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    });

    return { min, max };
};
