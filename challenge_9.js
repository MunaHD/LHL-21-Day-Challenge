// challenge 9
const listAstronautJobs = (roster) => {
  let list = [];
  for (let i of roster) {
    list.push(i.job);
  }
  return list;
};
module.exports = listAstronautJobs;
