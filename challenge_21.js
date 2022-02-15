// challenge 21
const parseMissionSummary = (exchanges, missionData) => {
  let arr = [];
  for (let i of exchanges) {
    arr.push(`${i.origin}: ${i.message}`);
  }

  return {
    transcript: arr,
    missionData,
  };
};
module.exports = parseMissionSummary;
