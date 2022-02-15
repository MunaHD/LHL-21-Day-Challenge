// challenge 16
const getAverageSpeed = (firstPosition, secondPosition) => {
  // the average speed from the two positions
  let lat = secondPosition.altitude - firstPosition.altitude;
  let time = secondPosition.time - firstPosition.time;

  return Number((lat / time).toFixed(1));
};
module.exports = getAverageSpeed;
