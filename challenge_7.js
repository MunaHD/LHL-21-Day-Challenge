// challenge 7
const storeWeatherConditions = (
  temperature,
  condition,
  windSpeed,
  windDirection
) => {
  const obj = {
    temperature: Math.round(((temperature - 32) * 5) / 9),
    windSpeed: Math.round(windSpeed / 2.237),
    windDirection,
    condition,
  };
  return obj;
};
module.exports = storeWeatherConditions;
