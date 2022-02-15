// challenge 13
const checkAllGauges = (gaugeList) => {
  for (let gauge of gaugeList) {
    let current = gauge.current;
    let min = gauge.min;
    let max = gauge.max;
    if (current < min || current > max) {
      return false;
    }
  }
  return true;
};
module.exports = checkAllGauges;
