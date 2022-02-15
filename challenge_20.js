// challenge 20
const confirmReentryPlans = (speed, missionData, checks) => {
  const { maxSpeed, minSpeed, dataEntries } = checks;
  const { astro, bio, physiscs } = dataEntries;
  let arr = [];

  if (speed > minSpeed && speed < maxSpeed) {
    arr.push("true");
  }

  for (let i in missionData) {
    if (dataEntries[i] === missionData[i].length) {
      arr.push("true");
    }
  }
  // speed is 1, data  is 3, 4 total trues are needed
  if (arr.length !== 4) {
    return false;
  }

  return true;
};
module.exports = confirmReentryPlans;
