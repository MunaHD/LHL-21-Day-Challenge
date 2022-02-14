// challenge 3
const checkGaugeStatus = (gauge) => {
  const { current, min, max } = gauge;
  if (current > min && current < max) {
    return true;
  }
  return false;
};
module.exports = checkGaugeStatus;
